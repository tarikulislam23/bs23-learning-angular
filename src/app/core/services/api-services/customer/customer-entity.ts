import { environment } from './../../../../../environments/environment.prod';
import { BaseEntity } from "src/app/core/interfaces/baseEntity";

export class CustomerEntity implements BaseEntity {
  /**
   *
   */
  constructor() {
    this.apiServer = environment.apiURL + '/customers';
  }
  apiServer: string;
  endpoint: string;
  data: any;
}
