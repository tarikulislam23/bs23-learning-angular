import { Router } from '@angular/router';
import { OneColumnLayoutComponent } from './../../../@themes/layout/one-column-layout/one-column-layout.component';
import { CustomerService } from './../../../core/services/api-services/customer/customer.service';
import { CustomerRoutingList } from './../customer-routing.list';
import { NavigationService } from './../../../core/services/app-services/navigation.service';
import { Subscription } from 'rxjs';
import { FormErrorHandler } from './../../../core/services/app-services/formErrorHandler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-create-form',
  templateUrl: './customer-create-form.component.html',
  styleUrls: ['./customer-create-form.component.css']
})
export class CustomerCreateFormComponent implements OnInit {


  customerRoutes = CustomerRoutingList.routeList();

  createSubscription: Subscription = new Subscription();

  customerForm: FormGroup = new FormGroup({});
  formErrors: any = {};
  formErrorHandler: FormErrorHandler = new FormErrorHandler();

  constructor(
    private layout: OneColumnLayoutComponent,
    public formBuilder: FormBuilder,
    private navigationService: NavigationService,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.customerForm = this.formBuilder.group({
      first_name: [""],
      last_name: [""],
      email: ["",[Validators.required, Validators.email]],
    });

    this.formErrorHandler.handleErrors(this.customerForm, this.formErrors, {
      first_name: {
        required: "Enter first name"
      },
      last_name: {
        required: "Enter last name",
      },
      email: {
        required: "Enter customer email",
        email: "Enter a valid email"
      }
    });
  }

  submitForm(){
    if(this.customerForm.invalid){
      this.formErrorHandler.showErrorOnSubmit();
      return false; //Return if form invalid
    }

    const customerData = this.customerForm.value;

    this.createSubscription = this.customerService.addCustomer(customerData).subscribe(response=>{
      console.log(response);
      this.layout.setToastMessage({severity:'success', summary: 'Successful', detail: 'Customer Added', life: 2000});
      this.router.navigateByUrl(`${this.customerRoutes.customers.link}`);
    });

  }

  back(){
    this.navigationService.back(this.customerRoutes.customers.link);
  }
  ngOnDestroy(){
    this.createSubscription?.unsubscribe();
  }

}
