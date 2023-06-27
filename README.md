# testing-mf-nx
 A repo to test module federation with angular. The current setup is that there are 2 nx workspaces, a shell and a remote, containing both a shell app and a remote app respectively. This is to simulate using the module federation in 2 separate nx repos, and dynamic federation to link the two together.

This was generated using the nx docs [here.](https://nx.dev/recipes/module-federation/dynamic-module-federation-with-angular)

The current error that I'm running into happens when trying to load the remote's route in the shell app:

`ERROR Error: Uncaught (in promise): Error: NG0203: inject() must be called from an injection context such as a   constructor, a factory function, a field initializer, or a function used with 'runInInjectionContext'. Find more at https://angular.io/errors/NG0203`
