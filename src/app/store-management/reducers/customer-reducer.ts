import { CUSTOMER_LIST_REQUEST, CUSTOMER_LIST_SUCCESS, CUSTOMER_UPDATE, CUSTOMER_DELETE, CUSTOMER_ADD } from './../actions/customer-action';
import { Action } from './../actions/index';
import { Customers } from './../../core/dtos/customer/customer-details';

export interface CustomerReducerState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  customers: Customers[];
}

const initialCustomerState: CustomerReducerState = {
  loaded: false,
  loading: false,
  error: false,
  customers: []
}

export function CustomerReducer(state = initialCustomerState, action: Action): CustomerReducerState {

  switch(action.type){
    case CUSTOMER_LIST_REQUEST: {
      return {...state, loading: true, error: false};
    }
    case CUSTOMER_LIST_SUCCESS: {
      const updatedData = action.payload.data;
      return {...state, loading: false, loaded: true, error: false, customers: updatedData};
    }
    case CUSTOMER_ADD: {
      let addedCustomers = [...state.customers];
      const addedCustomer = action.payload.data as Customers;
      addedCustomers.push(addedCustomer);

      return {...state, loading: false, loaded: true, error: false, customers: addedCustomers};
    }
    case CUSTOMER_UPDATE: {
      let addedCustomers = [...state.customers];
      const updatedCustomer = action.payload.data as Customers;
      const customerIndex = addedCustomers.findIndex(customer=>customer.id==updatedCustomer.id);
      addedCustomers[customerIndex] = updatedCustomer;

      return {...state, loading: false, loaded: true, error: false, customers: addedCustomers};
    }
    case CUSTOMER_DELETE: {
      let addedCustomer = [...state.customers];
      const customerId = action.payload.id as number;
      const customerIndex = addedCustomer.findIndex(customer=>customer.id==customerId);

      if (customerIndex > -1) {
        addedCustomer.splice(customerIndex, 1);
      }

      return {...state, loading: false, loaded: true, error: false, customers: addedCustomer};
    }
    default: {
      return state;
    }
  }
}

//Selectors
export const getLoading = (state: CustomerReducerState) => state.loading;
export const getLoaded = (state: CustomerReducerState) => state.loaded;
export const getCustomerError = (state: CustomerReducerState) => state.error;
export const getCustomers = (state: CustomerReducerState) => state.customers;
