import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountComponent} from "./count/count.component";
import {ParentComponent} from "./communication/parent/parent.component";
import {ProdusenModule} from "./produsen/produsen.module";
import { ProduckModule } from './Produck/Produck.module';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin', loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: 'customer', loadChildren: () => import("./modules/customer/customer.module").then(m => m.CustomerModule)
  },
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
