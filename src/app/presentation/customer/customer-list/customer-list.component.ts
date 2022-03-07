import { CustomerListRequestAction, CustomerListSuccessAction, CustomerDeleteAction } from './../../../store-management/actions/customer-action';
import { CustomerRoutingList } from './../customer-routing.list';
import { OneColumnLayoutComponent } from './../../../@themes/layout/one-column-layout/one-column-layout.component';
import { Customers } from './../../../core/dtos/customer/customer-details';
import { combineLatest, Subscription } from 'rxjs';
import { CustomerService } from './../../../core/services/api-services/customer/customer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { getCustomerLoaded, getCustomerLoading, getCustomers, RootReducerState } from 'src/app/store-management/reducers';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  customerRoutes = CustomerRoutingList.routeList();

  subscription: Subscription = new Subscription();

  customerList: Customers[] = [];
  selectedcustomers: Customers[];

  constructor(
    private customerService: CustomerService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private layout: OneColumnLayoutComponent,
    private store: Store<RootReducerState>
    ) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomers(){
    this.subscription.add(
      this.customerService.getAllCustomers().subscribe(customers=>{
        this.customerList = customers;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Loaded', life: 3000});
      })
    );
  }

  getAllCustomer(){

    const loading$ = this.store.select(getCustomerLoading);
    const loaded$ = this.store.select(getCustomerLoaded);
    const getCustomerData = this.store.select(getCustomers);


    combineLatest([loading$, loaded$]).subscribe((data)=>{
      if(!data[0] && !data[1]){
        this.store.dispatch(new CustomerListRequestAction());
        this.subscription.add(
          this.customerService.getAllCustomers().subscribe(customers=>{
            this.store.dispatch(new CustomerListSuccessAction({data: customers}));
            // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Loaded', life: 3000});
          })
        );
      }
    });

    getCustomerData.subscribe(data=>{
      this.customerList = [...data];
    });
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected customer?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {

            this.layout.setToastMessage({severity:'success', summary: 'Successful', detail: 'Customer Deleted', life: 3000});
        }
    });
  }

  deleteCustomer(customer: Customers) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + customer.first_name + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.subscription.add(
            this.customerService.deleteCustomer(customer.id).subscribe(customers=>{
              this.store.dispatch(new CustomerDeleteAction({id: customer.id}));
              this.getAllCustomer();
              this.layout.setToastMessage({severity:'success', summary: 'Successful', detail: 'Customer Deleted', life: 3000});
            })
          );
        }
    });
}

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
