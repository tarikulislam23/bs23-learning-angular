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
}
