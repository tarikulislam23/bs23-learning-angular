import { HttpService } from './../../app-services/http.service';
import { Customers } from './../../../dtos/customer/customer-details';
import { Observable } from 'rxjs';
import { CustomerEntity } from './customer-entity';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpService: HttpService<CustomerEntity>) { }

  getAllCustomers(): Observable<Customers[]>{
    const request = new CustomerEntity();
    request.endpoint = "";
    return this.httpService.getAll$(request).pipe(map(data => data as Customers[]));
  }

  customerDetails(id: number): Observable<Customers>{
    const request = new CustomerEntity();
    request.endpoint = "/";
    request.data = id;
    return this.httpService.getById$(request);
  }

  addCustomer(customerData: Customers): Observable<Customers>{
    const request = new CustomerEntity();
    request.endpoint = "";
    request.data = customerData;
    return this.httpService.create$(request);
  }

  editCustomer(customerData: Customers): Observable<Customers>{
    const request = new CustomerEntity();
    request.endpoint = `/${customerData.id}`;
    request.data = customerData;
    return this.httpService.update$(request);
  }

  deleteCustomer(id: number): Observable<Customers>{
    const request = new CustomerEntity();
    request.endpoint = "/";
    request.data = id;
    return this.httpService.delete$(request);
  }
}
