import { CustomerRoutingList } from './customer-routing.list';
import { CustomerUpdateFormComponent } from './customer-update-form/customer-update-form.component';
import { CustomerCreateFormComponent } from './customer-create-form/customer-create-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: CustomerRoutingList.routeList().customers.path,
        component: CustomerListComponent
    },
    {
      path: CustomerRoutingList.routeList().addCustomer.path,
      component: CustomerCreateFormComponent
    },
    {
      path: `${CustomerRoutingList.routeList().editCustomer.path}/:id`,
      component: CustomerUpdateFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
