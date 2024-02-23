import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountComponent} from "./count/count.component";
import {ParentComponent} from "./communication/parent/parent.component";
import {ProdusenModule} from "./produsen/produsen.module";
import {ProdukModule} from "./produk/produk.module";

const routes: Routes = [
  {
    path: 'count',
    component: CountComponent
  },
  {
    path: 'communication',
    component: ParentComponent
  },
  {
    path: 'produsen',
    loadChildren: () => ProdusenModule
  },
  {
    path: 'produk',
    loadChildren: () => ProdukModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
