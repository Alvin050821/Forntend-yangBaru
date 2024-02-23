import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListProduckComponent } from './list-Produck/list-Produk.component';
import { FormProduckComponent } from './form-Produck/form-Produck.component';

const routes: Routes = [
  {
    path: '',
    component: ListProduckComponent
  },
  {
    path: 'form',
    component: FormProduckComponent
  },
  {
    path: 'edit/:id',
    component: FormProduckComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduckRoutingModule {
}
