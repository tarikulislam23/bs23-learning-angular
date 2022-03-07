import { DeleteEntity } from './../../interfaces/deleteEntity';
import { BaseEntity } from './../../interfaces/baseEntity';
import { HttpErrorHandler } from './httpErrorHandler';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: "root",
})
export class HttpService<T extends BaseEntity>{
  constructor(
    private httpClient: HttpClient,
    private httpErrorHandler: HttpErrorHandler
  ) { }

  create$(entity: T): Observable<any> {
    return this.httpClient
      .post<any>(entity.apiServer + entity.endpoint, entity.data)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.httpErrorHandler.handleError(error)
        )
      );
  }

  update$(entity: T): Observable<any> {
    return this.httpClient
      .put<any>(entity.apiServer + entity.endpoint, entity.data)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.httpErrorHandler.handleError(error)
        )
      );
  }

  delete$(entity: T): Observable<any> {
    return this.httpClient
      .delete<any>(entity.apiServer + entity.endpoint + entity.data)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.httpErrorHandler.handleError(error)
        )
      );
  }

  cancel$(entity: T): Observable<any> {
    return this.httpClient
      .post<any>(entity.apiServer + entity.endpoint, entity.data)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.httpErrorHandler.handleError(error)
        )
      );
  }

  getAll$(entity: T): Observable<any> {
    return this.httpClient
      .get<any>(entity.apiServer + entity.endpoint)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.httpErrorHandler.handleError(error)
        )
      );
  }

  getWithParams$(entity: T): Observable<any> {
    return this.httpClient
      .get<any>(entity.apiServer + entity.endpoint, { params: entity.data?.params || null })
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.httpErrorHandler.handleError(error)
        )
      );
  }

  getByPost$(entity: T): Observable<any> {
    return this.httpClient
      .post<any>(entity.apiServer + entity.endpoint, entity.data)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.httpErrorHandler.handleError(error)
        )
      );
  }

  getById$(entity: T): Observable<any> {
    return this.httpClient
      .get<any>(entity.apiServer + entity.endpoint + entity.data)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.httpErrorHandler.handleError(error)
        )
      );
  }


}
