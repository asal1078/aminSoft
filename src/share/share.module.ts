import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgSwitcheryModule } from 'angular-switchery-ios';
import { CanvasJSChart } from './components/canvas-chart/canvasjs.angular.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    CanvasJSChart,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgSwitcheryModule,
  ],
  exports: [
    NavMenuComponent,
    FooterComponent,
    CanvasJSChart
  ]
})
export class ShareModule { }
