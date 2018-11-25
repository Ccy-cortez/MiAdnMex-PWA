import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AngularMaterialModule } from '../angularMaterial.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
    declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    MenuComponent
    ],
    exports:
    [
        FooterComponent,
        HeaderComponent,
        SidenavComponent,
        MenuComponent
    ],
    imports:
    [
        AngularMaterialModule
    ]
})
export class SharedModule {

 }
