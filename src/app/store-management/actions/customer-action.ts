import { Customers } from './../../core/dtos/customer/customer-details';


export const CUSTOMER_LIST_REQUEST = 'customer-list-request';
export const CUSTOMER_LIST_SUCCESS = 'customer-list-success';
export const CUSTOMER_LIST_ERROR = 'customer list error';
export const CUSTOMER_DELETE = 'customer delete';
export const CUSTOMER_UPDATE = 'customer update';
export const CUSTOMER_ADD = 'customer add';


export class CustomerListRequestAction {
  readonly type = CUSTOMER_LIST_REQUEST;
}

export class CustomerListSuccessAction {
  readonly type = CUSTOMER_LIST_SUCCESS;

  constructor(public payload?: { data: Customers[] }){}
}

export class CustomerListErrorAction {
  readonly type = CUSTOMER_LIST_ERROR;
}

export class CustomerAddAction {
  readonly type = CUSTOMER_ADD;

  constructor(public payload: { data: Customers }){}
}

export class CustomerUpdateAction {
  readonly type = CUSTOMER_UPDATE;

  constructor(public payload: { data: Customers }){}
}

export class CustomerDeleteAction {
  readonly type = CUSTOMER_DELETE;

  constructor(public payload: { id: number }){}
}
