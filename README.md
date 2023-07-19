# testing-mf-nx
 A repo to test module federation with angular. The current setup is that there are 2 nx workspaces, a shell and a remote, containing both a shell app and a remote app respectively. This is to simulate using the module federation in 2 separate nx repos, and dynamic federation to link the two together.

This was generated using the nx docs [here.](https://nx.dev/recipes/module-federation/dynamic-module-federation-with-angular)

The current error that I'm running into happens when trying to load the remote's route in the shell app:
`ERROR Error: Uncaught (in promise): Error: NG0203: inject() must be called from an injection context such as a   constructor, a factory function, a field initializer, or a function used with 'runInInjectionContext'. Find more at https://angular.io/errors/NG0203`

The above was fixed, but now I'm not able to load anything from the remote into the shell's router outlet.

UPDATE: Got a dynamic remote integrated into a shell app outside of this repo. still not sure what's wrong with the `remote` and `shell` nx-workspaces, but the `dynamic-remote-tester` runs perfectly with the updated angular to `16.1.3` and nx beta version `16.6.0-beta.2`. 

Fixed the above!

Dynamic remote tester now works on nx version `16.5.3` w/ a mock service using the HTTPClient package provided by angular.
