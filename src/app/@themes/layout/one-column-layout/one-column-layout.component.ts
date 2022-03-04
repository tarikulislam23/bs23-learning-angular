import { Message, MessageService } from 'primeng/api';
import { ConfigService } from '../../../core/services/app-services/app.config.service';
import { AppConfig } from './../../../core/dtos/appconfig';
import { AppComponent } from './../../../app.component';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one-column-layout',
  templateUrl: './one-column-layout.component.html',
  styleUrls: ['./one-column-layout.component.scss']
})
export class OneColumnLayoutComponent implements OnInit {

  public menuInactiveDesktop: boolean;

  public menuActiveMobile: boolean;

  public overlayMenuActive: boolean;

  public staticMenuInactive: boolean = false;

  public profileActive: boolean;

  public topMenuActive: boolean;

  public topMenuLeaving: boolean;

  public theme: string;

  documentClickListener: () => void;

  menuClick: boolean;

  topMenuButtonClick: boolean;

  configActive: boolean;

  configClick: boolean;

  config: AppConfig;

  subscription: Subscription;

  constructor(public renderer: Renderer2, public app: AppComponent, public configService: ConfigService, private messageService: MessageService) { }

  ngOnInit() {
      this.config = this.configService.config;
      this.subscription = this.configService.configUpdate$.subscribe(config => this.config = config);
  }

  setToastMessage(message: Message){
    console.log('Toast triggered')
    this.messageService.add({severity :message?.severity, summary: message?.summary, detail: message?.detail, life: 2000});
    // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Customer Deleted', life: 3000});
  }

  ngAfterViewInit() {
      // hides the overlay menu and top menu if outside is clicked
      this.documentClickListener = this.renderer.listen('body', 'click', (event) => {
          if (!this.isDesktop()) {
              if (!this.menuClick) {
                  this.menuActiveMobile = false;
              }

              if (!this.topMenuButtonClick) {
                  this.hideTopMenu();
              }
          }
          else {
              if (!this.menuClick && this.isOverlay()) {
                  this.menuInactiveDesktop = true;
              }
              if (!this.menuClick){
                  this.overlayMenuActive = false;
              }
          }

          if (this.configActive && !this.configClick) {
              this.configActive = false;
          }

          this.configClick = false;
          this.menuClick = false;
          this.topMenuButtonClick = false;
      });
  }

  toggleMenu(event: Event) {
      this.menuClick = true;

      if (this.isDesktop()) {
          if (this.app.menuMode === 'overlay') {
              if(this.menuActiveMobile === true) {
                  this.overlayMenuActive = true;
              }

              this.overlayMenuActive = !this.overlayMenuActive;
              this.menuActiveMobile = false;
          }
          else if (this.app.menuMode === 'static') {
              this.staticMenuInactive = !this.staticMenuInactive;
          }
      }
      else {
          this.menuActiveMobile = !this.menuActiveMobile;
          this.topMenuActive = false;
      }

      event.preventDefault();
  }

  toggleProfile(event: Event) {
      this.profileActive = !this.profileActive;
      event.preventDefault();
  }

  toggleTopMenu(event: Event) {
      this.topMenuButtonClick = true;
      this.menuActiveMobile = false;

      if (this.topMenuActive) {
          this.hideTopMenu();
      } else {
          this.topMenuActive = true;
      }

      event.preventDefault();
  }

  hideTopMenu() {
      this.topMenuLeaving = true;
      setTimeout(() => {
          this.topMenuActive = false;
          this.topMenuLeaving = false;
      }, 1);
  }

  onMenuClick() {
      this.menuClick = true;
  }

  onConfigClick(event) {
      this.configClick = true;
  }

  isStatic() {
      return this.app.menuMode === 'static';
  }

  isOverlay() {
      return this.app.menuMode === 'overlay';
  }

  isDesktop() {
      return window.innerWidth > 992;
  }

  isMobile(){
      return window.innerWidth < 1024;
  }

  onSearchClick() {
      this.topMenuButtonClick = true;
  }

  ngOnDestroy() {
      if (this.documentClickListener) {
          this.documentClickListener();
      }


      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }

}
