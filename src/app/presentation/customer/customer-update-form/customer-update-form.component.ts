import { Store } from '@ngrx/store';
import { Customers } from './../../../core/dtos/customer/customer-details';
import { FormErrorHandler } from './../../../core/services/app-services/formErrorHandler';
import { Subscription } from 'rxjs';
import { CustomerRoutingList } from './../customer-routing.list';
import { CustomerService } from './../../../core/services/api-services/customer/customer.service';
import { NavigationService } from './../../../core/services/app-services/navigation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OneColumnLayoutComponent } from './../../../@themes/layout/one-column-layout/one-column-layout.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/api';
import { RootReducerState } from 'src/app/store-management/reducers';
import { CustomerUpdateAction } from 'src/app/store-management/actions/customer-action';

@Component({
  selector: 'app-customer-update-form',
  templateUrl: './customer-update-form.component.html',
  styleUrls: ['./customer-update-form.component.css']
})
export class CustomerUpdateFormComponent implements OnInit {

  customerRoutes = CustomerRoutingList.routeList();

  subscription: Subscription = new Subscription();

  customerForm: FormGroup = new FormGroup({});
  formErrors: any = {};
  formErrorHandler: FormErrorHandler = new FormErrorHandler();

  customerId: number = null;
  customerDetails: Customers;
  formDataIsloaded: boolean = false;

  customerMsg: Message[];

  constructor(
    private layout: OneColumnLayoutComponent,
    public formBuilder: FormBuilder,
    private navigationService: NavigationService,
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private store: Store<RootReducerState>
  ) {
    this.subscription.add(
      this.route.paramMap.subscribe(params=> this.customerId = parseInt(params.get("id")))
    );
  }

  ngOnInit(): void {
    this.loadCustomerDetails(this.customerId);
  }

  loadCustomerDetails(customerId: number){
    this.formDataIsloaded = false;
    this.subscription.add(
      this.customerService.customerDetails(customerId).subscribe(response=>{

        // console.log(response);
        this.customerDetails = response;
        this.initForm();

        this.formDataIsloaded = true;
      },(error) => {
        // console.log(error);

        this.customerMsg = [
            {severity:'warn', summary:'Warning', detail:'Customer details not found!'}
        ];

        this.formDataIsloaded = true;
      })
    );
  }

  initForm(){
    this.customerForm = this.formBuilder.group({
      id: [this.customerDetails?.id],
      first_name: [this.customerDetails?.first_name||""],
      last_name: [this.customerDetails?.last_name||""],
      email: [this.customerDetails?.email||"",[Validators.required, Validators.email]],
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

    this.subscription = this.customerService.editCustomer(customerData).subscribe(response=>{
      this.store.dispatch(new CustomerUpdateAction({data: response}));
      this.layout.setToastMessage({severity:'success', summary: 'Successful', detail: 'Customer Updated', life: 2000});
      this.router.navigateByUrl(`${this.customerRoutes.customers.link}`);
    });

  }

  back(){
    this.navigationService.back(this.customerRoutes.customers.link);
  }
  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
}
