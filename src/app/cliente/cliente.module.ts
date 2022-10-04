import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente/cliente.component';


@NgModule({
  declarations: [
    ClienteComponent,
    ClienteListaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    SplitButtonModule
  ]
})
export class ClienteModule { }
