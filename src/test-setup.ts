// ngx-markdown's `emoji` attribute requires the emoji-toolkit global (`joypixels`),
// normally loaded via the `scripts` build option in a real browser. jsdom doesn't
// execute that global script the same way, so stub it for component tests.
(globalThis as unknown as { joypixels: { shortnameToUnicode: (value: string) => string } }).joypixels = {
  shortnameToUnicode: (value: string) => value
};
