import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'landing'},

    // Redirect signed-in user to the '/example'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'home'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [],
        canActivateChild: [],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'landing', loadChildren: () => import('./modules/landing/landing.routes')},
            {path: 'home', loadChildren: () => import('./modules/home/home.routes')},
            {path: 'cv', loadChildren: () => import('./modules/cv/cv.routes')},
            {path: 'web-demo', loadChildren: () => import('./modules/web-demo/web-demo.routes')},
        ]
    }
];
