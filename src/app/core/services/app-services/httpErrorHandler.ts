import { httpErrorMessages } from '../../../data/httpErrorMessages';
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class HttpErrorHandler {
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error?.message;
    } else {
      // Get server-side error
      errorMessage = httpErrorMessages.find(item => item.code == error.status)?.message;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
