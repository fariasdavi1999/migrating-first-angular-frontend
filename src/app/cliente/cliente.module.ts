import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';

import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente/cliente.component';



@NgModule({
  declarations: [
    ClienteListaComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    SplitButtonModule,
    DropdownModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    CalendarModule,
    ConfirmDialogModule,
    InputMaskModule,
    NgxQRCodeModule
  ]
})
export class ClienteModule { }
