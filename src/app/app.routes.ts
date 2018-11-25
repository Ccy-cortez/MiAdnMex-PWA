import {RouterModule, Routes} from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const appRoutes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: NopagefoundComponent}

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true});
