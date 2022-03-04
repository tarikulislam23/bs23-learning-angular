import { OneColumnLayoutComponent } from './../../../@themes/layout/one-column-layout/one-column-layout.component';
import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';

@Injectable({
  providedIn: "root",
})
export class AlertService {

  constructor(
    public layout: OneColumnLayoutComponent
  ) { }


  setToastMessage(message: Message){
    this.layout.setToastMessage(message);
  }
}
