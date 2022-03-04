import { MessageService, ConfirmationService } from 'primeng/api';
import { CustomerService } from './../../core/services/api-services/customer/customer.service';
import { DashboardRoutingModule } from './customer.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateFormComponent } from './customer-create-form/customer-create-form.component';
import { CustomerUpdateFormComponent } from './customer-update-form/customer-update-form.component';
import {FileUploadModule} from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    DashboardRoutingModule,
    FileUploadModule,
    ConfirmDialogModule
  ],
  declarations: [CustomerListComponent, CustomerCreateFormComponent, CustomerUpdateFormComponent],
  providers: [CustomerService,MessageService,ConfirmationService],
  exports: []
})
export class CustomerModule { }
