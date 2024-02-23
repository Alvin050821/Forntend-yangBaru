import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountComponent} from "./count/count.component";
import {ParentComponent} from "./communication/parent/parent.component";
import {ProdusenModule} from "./produsen/produsen.module";
import { ProduckModule } from './Produck/Produck.module';

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
    path: 'produck',
    loadChildren: () => ProduckModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
