import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, provideRouter } from '@angular/router';
import { AuthFacade } from './auth.facade';
import { adminChildGuard, adminGuard } from './admin.guard';

describe('Admin route security', () => {
  const admin = signal(false);
  let ready: Promise<void>;

  beforeEach(() => {
    admin.set(false);
    ready = Promise.resolve();
    TestBed.configureTestingModule({ providers: [provideRouter([]),
      { provide: AuthFacade, useValue: { isAdmin: admin, whenReady: () => ready } },
    ] });
  });

  it('waits for initial session resolution before deciding access', async () => {
    let resolve!: () => void;
    ready = new Promise<void>(complete => { resolve = complete; });
    let settled = false;
    const result = TestBed.runInInjectionContext(() => adminGuard({} as Route, [], {} as Parameters<typeof adminGuard>[2]));
    Promise.resolve(result).then(() => { settled = true; });
    await Promise.resolve();
    expect(settled).toBe(false);
    admin.set(true);
    resolve();
    expect(await result).toBe(true);
  });

  it('redirects non-admin sessions to the home page', async () => {
    const result = await TestBed.runInInjectionContext(() => adminGuard({} as Route, [], {} as Parameters<typeof adminGuard>[2]));
    expect(TestBed.inject(Router).serializeUrl(result as ReturnType<Router['createUrlTree']>)).toBe('/');
  });

  it('checks again when navigating within an already-loaded admin area', async () => {
    admin.set(false);
    const result = await TestBed.runInInjectionContext(() => adminChildGuard(
      {} as ActivatedRouteSnapshot, {} as RouterStateSnapshot));
    expect(TestBed.inject(Router).serializeUrl(result as ReturnType<Router['createUrlTree']>)).toBe('/');
  });

  it('fails closed if the initial session lookup rejects', async () => {
    ready = Promise.reject(new Error('Auth unavailable'));
    const result = await TestBed.runInInjectionContext(() => adminGuard({} as Route, [], {} as Parameters<typeof adminGuard>[2]));
    expect(TestBed.inject(Router).serializeUrl(result as ReturnType<Router['createUrlTree']>)).toBe('/');
  });
});
