import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CustomerRoutingList {

  private rootRoute = {
    path: "customer",
    link: `/customer`
  }

  private routues = {
    customers: {
      path: "",
      link: `${ this.rootRoute.link }`
    },
    addCustomer: {
      path: "create",
      link: `${ this.rootRoute.link }/create`
    },
    editCustomer: {
      path: "edit",
      link: `${ this.rootRoute.link }/edit`
    }
  }

  static routeList(){
    return new CustomerRoutingList().routues;
  }
}
