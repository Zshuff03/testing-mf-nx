import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
    {
        path: 'login',
        loadChildren: () =>
            loadRemoteModule('login', './Module').then(
                (m) => m.RemoteEntryModule
             ),
    },
    {
        path: 'shell-no-nx',
        loadChildren: () =>
            loadRemoteModule('shell-no-nx', './Module').then(
                (m) => m.AppModule
             ),
    }
];
