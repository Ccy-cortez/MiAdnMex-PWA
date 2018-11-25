import { NgModule } from '@angular/core';


// Modules
import { AngularMaterialModule } from '../angularMaterial.module';
import { FormsModule } from '@angular/forms';

// Components
import { InputBarComponent } from './input-bar/input-bar.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        InputBarComponent,
        ChartComponent
    ],
    exports:
    [
        InputBarComponent,
        ChartComponent
    ],
    imports: [
        AngularMaterialModule,
        FormsModule,
        ChartsModule,
        CommonModule
    ]
})
export class ComponentsModule { }
