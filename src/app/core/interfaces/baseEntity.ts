import { HttpHeaders } from "@angular/common/http";

export interface BaseEntity {
  apiServer: string; // example: http://www.abc.com
  endpoint: string; // example: /client/getall
  data: any; // example client object
  httpHeader?: HttpHeaders
}
