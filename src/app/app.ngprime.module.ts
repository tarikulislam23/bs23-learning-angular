import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
    exports: [
        ToolbarModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        PanelModule,
        ToastModule,
        MegaMenuModule,
        MessageModule,
        CardModule,
        ProgressSpinnerModule,
        OverlayPanelModule,
        BreadcrumbModule,
        CalendarModule,
        SidebarModule,
        DynamicDialogModule,
        InputTextareaModule,
        RadioButtonModule,
        InputSwitchModule,
        MessagesModule
    ]
})
export class NgPrimeModule { }
