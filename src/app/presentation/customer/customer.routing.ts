import { CustomerUpdateFormComponent } from './customer-update-form/customer-update-form.component';
import { CustomerCreateFormComponent } from './customer-create-form/customer-create-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: CustomerListComponent
    },
    {
      path: 'create',
      component: CustomerCreateFormComponent
    },
    {
      path: 'update/:id',
      component: CustomerUpdateFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
