import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { ProductsFormComponent } from './admin/product/products-form/products-form.component';
import { UsersComponent } from './admin/users/users.component';
import { FormComponent } from './admin/users/form/form.component';

const routes: Routes = [
  { path: 'products', component: ListProductComponent},
  { path: 'product/edit/:id', component: ProductsFormComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  