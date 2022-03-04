import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCustomerReducer from './customer-reducer';


export interface RootReducerState {
  customers: fromCustomerReducer.CustomerReducerState
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  customers: fromCustomerReducer.CustomerReducer
}


export const getCustomerState = (state: RootReducerState) => state.customers;

export const getCustomerLoaded = createSelector(getCustomerState,fromCustomerReducer.getLoaded);
export const getCustomerLoading = createSelector(getCustomerState,fromCustomerReducer.getLoading);
export const getCustomers = createSelector(getCustomerState,fromCustomerReducer.getCustomers);
