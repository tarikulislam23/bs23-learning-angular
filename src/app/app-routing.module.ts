import { OneColumnLayoutComponent } from './@themes/layout/one-column-layout/one-column-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('src/app/presentation/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('src/app/presentation/register/register.module').then(m => m.RegisterModule)
    },
    {
        path: '',
        component: OneColumnLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/presentation/dashboard/dashboard.module').then(m => m.DashboardModule)
          },
          {
            path: 'customer',
            loadChildren: () => import('src/app/presentation/customer/customer.module').then(m => m.CustomerModule)
          },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
