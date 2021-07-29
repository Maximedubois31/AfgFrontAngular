import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { ProductsFormComponent } from './admin/product/products-form/products-form.component';
import { EditUserComponent } from './admin/users/edit/edit-user.component';
import { FormComponent } from './admin/users/form/form.component';
import { UsersComponent } from './admin/users/list-user/users.component';

const routes: Routes = [
  { path: 'products', component: ListProductComponent},
  { path: 'product/edit/:id', component: ProductsFormComponent},
  { path: 'users', component: UsersComponent},
  { path: 'user/edit/:id', component: EditUserComponent},
  { path: 'user/edit', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  