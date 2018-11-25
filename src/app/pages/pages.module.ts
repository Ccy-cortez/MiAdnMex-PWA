import { NgModule } from '@angular/core';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnerComponent } from './partner/partner.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angularMaterial.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../components/chart/chart.component';
import { MatBadgeModule } from '@angular/material';
import { ShareButtonModule} from '@ngx-share/button';
import { HttpClientModule } from '@angular/common/http';
import { NutricionComponent } from './nutricion/nutricion.component';
import { NutriologoComponent } from './nutriologo/nutriologo.component';
import { EntrenamientoComponent } from './entrenamiento/entrenamiento.component';
import { EntrenadorComponent } from './entrenador/entrenador.component';

@NgModule({
    declarations: [
    DashboardComponent,
    HomeComponent,
    PartnersComponent,
    PagesComponent,
    PartnerComponent,
    NutricionComponent,
    NutriologoComponent,
    EntrenamientoComponent,
    EntrenadorComponent
    ],
    exports:
    [
        DashboardComponent,
        HomeComponent,
        PartnersComponent,
        PagesComponent,
        PartnerComponent
    ],
    imports: [
        PAGES_ROUTES,
        SharedModule,
        AngularMaterialModule,
        FormsModule,
        ComponentsModule,
        ChartsModule,
        CommonModule,
        MatBadgeModule,
        ShareButtonModule.forRoot(),
        HttpClientModule
    ]
})
export class PagesModule { }
