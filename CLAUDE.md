# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Angular 20 personal site (chitmon.com), deployed to GitHub Pages. Standalone components only, signals-based state, Optimus UI (Aura theme, `@openng/optimus-ui` — a PrimeNG v21 fork) for UI, ngx-markdown/marked + Prism for blog rendering.

## Commands

```bash
npm start                    # ng serve, http://localhost:4200
npm run build                # dev build (also regenerates blog manifest via prebuild)
npm run build:prod           # production build; copies index.html to 404.html for GH Pages SPA routing
npm test                     # ng test (Vitest)
npm run lint                 # ng lint (angular-eslint)
npm run blog:update-manifest # regenerate src/app/shared/data/blog-manifest.ts from public/blog/*.md
npm run supabase:serve:fn    # serve supabase edge functions locally (--env-file .env.local)
npm run supabase:deploy:fn -- <function-name>  # deploy a single supabase edge function
```

Run a single test file: `ng test --include='**/some.component.spec.ts'`

There is no e2e test setup.

CI (`.github/workflows/gh-pages.yml`) runs `npm install`, `npm run lint`, `npm run build:prod` on every push/PR to `main`, then deploys `dist/personal-site/browser` to GitHub Pages (custom domain `chitmon.com`).

## Architecture

### Module layout

- `src/app/core` — app shell: routes, app config, nav bar, footer, home page.
- `src/app/features` — routed feature areas, each with its own `*.routes.ts` lazy-loaded from `core/app.routes.ts` (`loadChildren`/`loadComponent`). Current features: `chittylog` (blog), `chittymon` (Pokémon-themed quiz game), `random-cat`.
- `src/app/shared` — cross-feature API clients, services, pipes, and small shared components (loading spinner, section break).

### State pattern: Store + Facade

Feature/page-level state follows a consistent split, seen in `core/home` and `features/chittylog/chittylog-container`:
- **Store** (`*.store.ts`): `@Injectable()` (not `providedIn: 'root'` — scoped to the component tree), holds a private signal-based state object, exposes readonly computed/derived signals and mutation methods. No business logic beyond state transitions.
- **Facade** (`*.facade.ts`): injects the store (and any API services), exposes computed signals and public methods components call. This is the component's single injected dependency for business logic — components should not inject stores or API services directly when a facade exists (per `.qoder/rules/angular-rules.md`).

When adding new stateful features, follow this store/facade split rather than putting logic directly in the component.

### Blog (chittylog)

Blog posts are markdown files with frontmatter in `public/blog/*.md` (cover image alongside each post). `npm-functions/generate-blog-manifest-ts.js` reads that directory at build time (`prebuild`/`prebuild:prod` npm hooks), parses frontmatter with `gray-matter`, sorts by date descending, and writes the auto-generated `src/app/shared/data/blog-manifest.ts` (`BLOG_MANIFEST` const) — **never edit blog-manifest.ts by hand**. `ChittylogContainerStore` reads from `BLOG_MANIFEST.files`; `ChittylogContainerFacade` layers search (via a `FormControl`, debounced) and tag filtering on top. Individual posts are fetched at runtime as raw markdown text (`api.get('blog/<name>.md', { responseType: 'text' })`) and rendered by `PostMarkdownComponent`.

### API layer / backend proxy

- `ApiService` (`shared/api/api.service.ts`) is a thin generic HTTP wrapper (`get`/`post`) over `HttpClient`.
- `API_URL` (`shared/api/api.config.ts`) points at an external proxy backend (`https://chitmon.com/api`), not directly at Supabase. `environment.ts`/`environment.prod.ts` also define `apiBase` (localhost:8080 in dev) — this is a newer, in-progress local backend setup (see recent commits "updates for proxy API", "environment setup, test local BE instance"); the two are not yet fully unified, so check both when tracing API base URLs.
- `SupabaseApiService` builds on `ApiService`/`API_URL` with a `/supabase` prefix and exposes Supabase storage/edge-function subroutes (resume download, random-cat image function) via `SUPABASE_API_CONFIG`. Actual Supabase edge functions live in `supabase/functions/` (Deno) and are deployed independently via the `supabase:deploy:fn` script.
- `lazyService()` (`shared/functions/lazy-service.ts`) wraps a dynamic `import()` of a service in an Observable via `Injector.get`, used to lazy-load rarely-needed services (e.g. `ReadingTimeService`) without pulling them into the main bundle.

### Conventions (from `.qoder/rules/angular-rules.md`)

- Standalone components everywhere; do **not** set `standalone: true` explicitly (it's the default).
- `ChangeDetectionStrategy.OnPush` on every component.
- Signals for state: `input()`/`output()` functions instead of decorators, `computed()` for derived state, `update()`/`set()` (never a signal `mutate`).
- `inject()` instead of constructor injection.
- Native control flow (`@if`/`@for`/`@switch`), not `*ngIf`/`*ngFor`/`*ngSwitch`; `class`/`style` bindings, not `ngClass`/`ngStyle`.
- No `@HostBinding`/`@HostListener` — use the `host` object in the decorator instead.
- Reactive forms over template-driven forms.
- Component selector prefix is `app-` (kebab-case elements, camelCase attributes) — enforced by eslint.
- Generated components default to inline templates and SCSS styles (`angular.json` schematics config), but when a component's template/logic grows, split into separate `.ts`/`.html`/`.scss` files (ts = logic, html = template, scss = styles) — see `post-container.component.ts` vs its `.scss` file for the split pattern.
