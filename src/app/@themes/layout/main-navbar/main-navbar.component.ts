import { OneColumnLayoutComponent } from './../one-column-layout/one-column-layout.component';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  items: MenuItem[];

  constructor(public appMain: OneColumnLayoutComponent) { }
  ngOnInit(): void {
  }

}
