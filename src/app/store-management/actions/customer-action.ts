import { Customers } from './../../core/dtos/customer/customer-details';


export const CUSTOMER_LIST_REQUEST = 'customer-list-request';
export const CUSTOMER_LIST_SUCCESS = 'customer-list-success';
export const CUSTOMER_LIST_FAILD = 'customer list faild';


export class CustomerListRequestAction {
  readonly type = CUSTOMER_LIST_REQUEST;
}

export class CustomerListSuccessAction {
  readonly type = CUSTOMER_LIST_SUCCESS;

  constructor(public payload?: { data: Customers[] }){}
}
