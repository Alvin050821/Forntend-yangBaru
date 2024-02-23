import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListProdukComponent} from "./list-produk/list-produk.component";
import {FormComponent} from "../produsen/form/form.component";
import {FormProdukComponent} from "./form-produk/form-produk.component";

const routes: Routes = [
  {
    path: '',
    component: ListProdukComponent
  },
  {
    path: 'form',
    component: FormProdukComponent
  },
  {
    path: 'edit/:id',
    component: FormProdukComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdukRoutingModule {
}
