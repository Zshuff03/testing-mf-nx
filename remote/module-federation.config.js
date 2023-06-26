module.exports = {
  name: 'remote',
  exposes: {
    './Module': './src/app/remote-entry/entry.module.ts',
  },
};
