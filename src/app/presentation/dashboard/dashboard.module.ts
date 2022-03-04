import { DashboardRoutingModule } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  exports: []
})
export class DashboardModule { }
