import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
    {
        path: 'remote',
        loadChildren: () =>
            loadRemoteModule('remote', './Module').then(
                (m) => m.RemoteEntryModule
             ),
    },

];
