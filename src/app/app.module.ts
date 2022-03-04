import { rootReducer } from './store-management/reducers';
import { NavigationService } from './core/services/app-services/navigation.service';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './core/services/app-services/app.menu.service';
import { AppMenuitemComponent } from './@themes/layout/main-sidebar/app.menuitem.component';

import { ConfigService } from './core/services/app-services/app.config.service';
import { NgPrimeModule } from './app.ngprime.module';
import { AppConfigComponent } from './@themes/layout/app-config/app.config.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './@themes/layout/header/header.component';
import { FooterComponent } from './@themes/layout/footer/footer.component';
import { MainSidebarComponent } from './@themes/layout/main-sidebar/main-sidebar.component';
import { MainNavbarComponent } from './@themes/layout/main-navbar/main-navbar.component';
import { OneColumnLayoutComponent } from './@themes/layout/one-column-layout/one-column-layout.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppMenuitemComponent,
    MainSidebarComponent,
    MainNavbarComponent,
    OneColumnLayoutComponent,
    AppConfigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgPrimeModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [
    MenuService, ConfigService, MessageService, NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
