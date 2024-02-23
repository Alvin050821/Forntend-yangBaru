import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from "@angular/forms";
import { ProduckRoutingModule } from './Produck.routing';
import { ListProduckComponent } from './list-Produck/list-Produk.component';
import { FormProduckComponent } from './form-Produck/form-Produck.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ListProduckComponent,
    FormProduckComponent
  ],
    imports: [
        CommonModule,
        ProduckRoutingModule,
        ReactiveFormsModule,
        NgbModule
    ]
})
export class ProduckModule { }
