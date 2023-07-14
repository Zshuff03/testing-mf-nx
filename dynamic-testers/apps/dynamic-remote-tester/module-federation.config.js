module.exports = {
  name: 'dynamic-remote-tester',
  exposes: {
    './Module':
      'apps/dynamic-remote-tester/src/app/remote-entry/entry.module.ts',
  },
};
