import { RouterModule, Routes } from '@angular/router';

// Components

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnersComponent } from './partners/partners.component';
import { NutricionComponent} from './nutricion/nutricion.component';
import { EntrenamientoComponent} from './entrenamiento/entrenamiento.component';
import { EntrenadorComponent} from './entrenador/entrenador.component';
import { NutriologoComponent} from './nutriologo/nutriologo.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent},
            { path: 'dashboard', component: DashboardComponent},
            { path: 'comparador', component: PartnersComponent},
            { path: 'nutricion', component: NutricionComponent},
            { path: 'entrenamiento', component: EntrenamientoComponent},
            { path: 'entrenador', component: EntrenadorComponent},
            { path: 'nutriologo', component: NutriologoComponent},
            { path: '', redirectTo: '/home', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
