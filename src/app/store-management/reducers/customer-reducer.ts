import { CUSTOMER_LIST_REQUEST, CUSTOMER_LIST_SUCCESS } from './../actions/customer-action';
import { Action } from './../actions/index';
import { Customers } from './../../core/dtos/customer/customer-details';

export interface CustomerReducerState {
  loading: boolean;
  loaded: boolean;
  customers: Customers[];
}

const initialCustomerState: CustomerReducerState = {
  loading: false,
  loaded: false,
  customers: []
}

export function CustomerReducer(state = initialCustomerState, action: Action): CustomerReducerState {

  debugger
  switch(action.type){
    case CUSTOMER_LIST_REQUEST: {
      return {...state, loading: true};
    }
    case CUSTOMER_LIST_SUCCESS: {
      const updatedData = state.customers.concat(action.payload.data);
      return {...state, loading: false, loaded: true, customers: updatedData};
    }
    default: {
      return state;
    }
  }
}

//Selectors
export const getLoading = (state: CustomerReducerState) => state.loading;
export const getLoaded = (state: CustomerReducerState) => state.loaded;
export const getCustomers = (state: CustomerReducerState) => state.customers;
