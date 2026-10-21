# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Angular 22 personal site (chitmon.com), deployed to GitHub Pages. Standalone components, zoneless change detection, signals-based state, Optimus UI 2 (Aura theme, `@openng/optimus-ui`) for UI, ngx-markdown/marked + Prism for blog rendering. Java 21 / Spring Boot 4 backend in the sibling `personal-site-service` repo, with PostgreSQL 17 on the homelab and hosted Supabase authentication.

See [docs/architecture.md](docs/architecture.md) for the full system overview, authentication/data flow, development setup, deployment, and the verified homelab snapshot (2026-10-20). Check the active branch and package manifests when determining versions.

## Commands

```bash
npm start                    # ng serve, http://localhost:4200
npm run build                # default production-config build; also regenerates blog manifest
npm run build:prod           # production build; copies index.html to 404.html for GH Pages SPA routing
npm test                     # ng test (Vitest)
npm run lint                 # ng lint (angular-eslint)
npm run blog:update-manifest # regenerate src/app/shared/data/blog-manifest.ts from public/blog/*.md
npm run supabase:serve:fn    # serve supabase edge functions locally (--env-file .env.local)
npm run supabase:deploy:fn -- <function-name>  # deploy a single supabase edge function
```

Run a single test file: `ng test --include='**/some.component.spec.ts'`

There is no e2e test setup.

CI (`.github/workflows/ci.yml`) runs install, lint, Vitest unit tests, and `build:prod` on PRs to `main` and manual runs. Deployment is separate: `.github/workflows/deploy.yml` builds and publishes `dist/personal-site/browser` to GitHub Pages on pushes to `main` (custom domain `chitmon.com`). Both workflows currently use Node 24.19.0.

## Architecture

### Themes

`core/theme/site-themes.ts` owns the Daylight, After Dark, Bubble Gum, and Bubble Gum Dark semantic palettes. `ThemeService` applies `--site-*` CSS variables, persists the selection, and sets generic light/dark attributes; `miami.preset.ts` maps Optimus UI tokens to the same roles. Use semantic variables in components rather than literal colors. See [docs/design-system.md](docs/design-system.md) for adding themes and accessibility checks. The home facade/store coordinate resume download progress and errors; the former color timer remains removed.

### Module layout

- `src/app/core` — app shell: routes, app config, nav bar, footer, home page.
- `src/app/features` — lazy-loaded feature areas: `chittylog` (`/chittyblog`), `random-cat` (`/cat`), `admin` (`/admin`, requires admin app metadata). Pokémon API playground and the physics canvas live under `admin/pokeplayground`.
- `src/app/shared` — cross-feature API clients/models, Supabase auth store/facade/admin guard/interceptor, services, pipes, and small shared components.

### State pattern: Store + Facade

Feature/page-level state follows a consistent split, seen in `features/admin/pokeplayground` and `features/chittylog/chittylog-container`:
- **Store** (`*.store.ts`): `@Injectable()` (not `providedIn: 'root'` — scoped to the component tree), holds a private signal-based state object, exposes readonly computed/derived signals and mutation methods. No business logic beyond state transitions.
- **Facade** (`*.facade.ts`): injects the store (and any API services), exposes computed signals and public methods components call. This is the component's single injected dependency for business logic — components should not inject stores or API services directly when a facade exists (per `.qoder/rules/angular-rules.md`).

When adding new stateful features, follow this store/facade split rather than putting logic directly in the component.

### Blog (chittylog)

Blog posts are markdown files with frontmatter in `public/blog/*.md` (cover image alongside each post). `npm-functions/generate-blog-manifest-ts.js` reads that directory at build time (`prebuild`/`prebuild:prod` npm hooks), parses frontmatter with `gray-matter`, sorts by date descending, and writes the auto-generated `src/app/shared/data/blog-manifest.ts` (`BLOG_MANIFEST` const) — **never edit blog-manifest.ts by hand**. `ChittylogContainerStore` reads from `BLOG_MANIFEST.files`; `ChittylogContainerFacade` layers search (via a `FormControl`, debounced) and tag filtering on top. Individual posts are fetched at runtime as raw markdown text (`api.get('blog/<name>.md', { responseType: 'text' })`) and rendered by `PostMarkdownComponent`.

### API layer, backend, and authentication

- `ApiService` (`shared/api/api.service.ts`) is a thin generic HTTP wrapper (`get`/`post`) over `HttpClient`; it does not prepend a base URL.
- Pokémon and user-sync clients use `environment.apiBase`: `http://localhost:8080` in development and `https://api.chitmon.com` in production. The separate `API_URL` constant is fixed at `https://api.chitmon.com` and is used by the older Supabase proxy client, including during local development.
- `ResumeApiService` downloads `/files/resume.pdf` from `environment.apiBase` with a public HTTP context, bypassing auth/session lookup. The home facade/store manage progress, retry feedback, and error logging with server request IDs. The backend reads `/srv/chitmon/public/resume.pdf` through a read-only directory mount; deploy the backend before the frontend consumer. See the backend's `docs/resume-download.md` for file updates and debugging.
- `SupabaseApiService` still adds `/supabase` for the random-cat edge function via `SUPABASE_API_CONFIG`. The cat route and former resume storage route worked publicly during the 2026-10-20 review but returned 404 directly from Spring: their additional public routing is outside Spring and was not inspected. Deno edge-function source lives in `supabase/functions/` and deploys independently via `supabase:deploy:fn`.
- Supabase handles Google OAuth and sessions. `AuthStore` initializes/listens to the session and calls `/me` once per distinct signed-in user. The admin guard waits for initial session resolution; `AuthFacade.isAdmin` checks `app_metadata.role`. `authInterceptor` attaches the current session token only to URLs starting with `environment.apiBase`, except requests marked with `PUBLIC_HTTP_REQUEST`.
- The Spring backend validates Supabase ES256 JWTs, then mirrors users into homelab `core.users` via `UserSyncFilter`. Frontend admin guards do not enforce backend permissions; new sensitive endpoints need explicit Spring security rules.
- Homelab PostgreSQL actively manages `core` and `pokemon` with independent Flyway histories. `pokemon` currently has only a bootstrap migration. Shipment tracking has been retired: its application code and managed-schema entry are removed, while its already-applied V1 migration and existing database data are preserved.
- `lazyService()` (`shared/functions/lazy-service.ts`) wraps a dynamic `import()` of a service in an Observable via `Injector.get`, used to lazy-load rarely-needed services (e.g. `ReadingTimeService`) without pulling them into the main bundle.

### Hosting

The Angular site is hosted on GitHub Pages. `api.chitmon.com` reaches the homelab through Cloudflare Tunnel (`cloudflared.service` → `localhost:8080`). The backend and PostgreSQL run under Docker Compose in `/opt/personal-site-service`. Backend pushes to `main` publish a GHCR image, then a self-hosted GitHub Actions runner pulls and restarts the stack. A manually managed homelab override exposes PostgreSQL only on `127.0.0.1:5432` for SSH-tunneled administration; preserve it and do not replace it with the development override. Full paths and dated observations are in `docs/architecture.md`.

### Forms (Signal Forms)

Use Signal Forms (`@angular/forms/signals` — `form()`, `[formField]`, `required()`/`email()`/etc., `submit()`) for new forms rather than Reactive Forms. Blog search retains its existing `FormControl`. The former shipment form and its unused shared validation directive/styles have been removed, so there is currently no Signal Forms reference implementation in the repo.

Optimus controls implement classic `ControlValueAccessor` interop and may require `[formField]="$any(...)"` for type checking. Do not manually bind `[invalid]` on an element using `[formField]`. When adding a new form, gate invalid styling on field interaction so required fields do not immediately appear red; include placeholder styling when handling Optimus validation states.

### Conventions (from `.qoder/rules/angular-rules.md`)

- Standalone components everywhere; do **not** set `standalone: true` explicitly (it's the default).
- `ChangeDetectionStrategy.OnPush` on every component.
- Signals for state: `input()`/`output()` functions instead of decorators, `computed()` for derived state, `update()`/`set()` (never a signal `mutate`).
- `inject()` instead of constructor injection.
- Native control flow (`@if`/`@for`/`@switch`), not `*ngIf`/`*ngFor`/`*ngSwitch`; `class`/`style` bindings, not `ngClass`/`ngStyle`.
- No `@HostBinding`/`@HostListener` — use the `host` object in the decorator instead.
- Signal Forms over Reactive Forms (`FormGroup`/`FormControl`) for all new forms — see "Forms (Signal Forms)".
- Component selector prefix is `app-` (kebab-case elements, camelCase attributes) — enforced by eslint.
- Generated components default to inline templates and SCSS styles (`angular.json` schematics config), but when a component's template/logic grows, split into separate `.ts`/`.html`/`.scss` files (ts = logic, html = template, scss = styles) — see `post-container.component.ts` vs its `.scss` file for the split pattern.
