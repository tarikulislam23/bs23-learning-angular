import { AlertService } from './../../../core/services/app-services/alert.service';
import { Customers } from './../../../core/dtos/customer/customer-details';
import { Subscription } from 'rxjs';
import { CustomerService } from './../../../core/services/api-services/customer/customer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  customerList: Customers[] = [];
  selectedcustomers: Customers[];

  constructor(
    private customerService: CustomerService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.subscription.add(
      this.customerService.getAllCustomers().subscribe(customers=>{
        this.customerList = customers;

        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Loaded', life: 3000});

        console.log(this.customerList);
      })
    );
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected customer?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {

            this.alertService.setToastMessage({severity:'success', summary: 'Successful', detail: 'Customer Deleted', life: 3000});
        }
    });
  }

  deleteProduct(customer: Customers) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + customer.first_name + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.alertService.setToastMessage({severity:'success', summary: 'Successful', detail: 'Customer Deleted', life: 3000});
        }
    });
}

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
