import { RegisterRoutingModule } from './register.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent],
  exports: []
})
export class RegisterModule { }
