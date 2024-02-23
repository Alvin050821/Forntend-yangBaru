import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdusenRoutingModule } from './produsen-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ProdusenRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProdusenModule { }
