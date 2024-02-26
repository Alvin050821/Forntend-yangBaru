import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostProdukComponent } from './components/post-produk/post-produk.component';

const routes: Routes = [
  { path: "dashboard", component: AdminDashboardComponent},
  { path: "produks", component: PostProdukComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
