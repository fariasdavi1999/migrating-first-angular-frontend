import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  PushNotificationModule,
  PushNotificationService,
} from 'ng-push-notification';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { TarefaService } from 'src/app/tarefa/tarefa.service';

import { MenuComponent } from '../menu/menu.component';
import { ClienteService } from './../../cliente/cliente.service';
import { DashboardService } from './../../dashboard/dashboard.service';
import { RelatoriosService } from './../../relatorios/relatorios.service';

@NgModule({
  declarations: [MenuComponent],

  imports: [
    CommonModule,
    AccordionModule,
    MenubarModule,
    HttpClientModule,
    PushNotificationModule.forRoot(),
  ],

  exports: [MenuComponent],

  providers: [
    ClienteService,
    TarefaService,
    DashboardService,
    RelatoriosService,
    MessageService,
    ConfirmationService,
    PushNotificationService,
  ],
})
export class CoreModule {}
