import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { ProductsFormComponent } from './admin/product/products-form/products-form.component';

const routes: Routes = [
  { path: 'products', component: ListProductComponent},
  { path: 'product/edit/:id', component: ProductsFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
