import { NgModule } from '@angular/core';

// Angular Material
import {MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, MatInputModule, MatSelectModule, MatMenuModule, MatBottomSheetModule, MatTooltipModule} from '@angular/material';
import {MatSlideToggleModule, MatProgressBarModule, MatSliderModule, MatDividerModule, MatFormFieldModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatSlideToggleModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatDividerModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatSelectModule,
        MatMenuModule,
        MatBottomSheetModule,
        MatTooltipModule
    ],
    exports:
    [
        MatCardModule,
        MatSlideToggleModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatDividerModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatSelectModule,
        MatMenuModule,
        MatBottomSheetModule,
        MatTooltipModule
    ]
})
export class AngularMaterialModule { }
