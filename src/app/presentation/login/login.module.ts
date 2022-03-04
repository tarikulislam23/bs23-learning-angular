import { LoginRoutingModule } from './login.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  exports: []
})
export class LoginModule { }
