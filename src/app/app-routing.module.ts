import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesFormComponent } from './admin/company/companies-form/companies-form.component';
import { ListCompanyComponent } from './admin/company/list-company/list-company.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { ProductsFormComponent } from './admin/product/products-form/products-form.component';
import { EditUserComponent } from './admin/users/edit/edit-user.component';
import { FormComponent } from './admin/users/form/form.component';
import { UsersComponent } from './admin/users/list-user/users.component';

const routes: Routes = [
  { path: 'products', component: ListProductComponent},
  { path: 'product/edit/:id', component: ProductsFormComponent},
  { path: 'product/edit', component: ProductsFormComponent},
  { path: 'users', component: UsersComponent},
  { path: 'companies', component: ListCompanyComponent},
  { path: 'company/edit/:id', component: CompaniesFormComponent},
  { path: 'company/edit', component: CompaniesFormComponent},
  { path: 'users', component: UsersComponent},
  { path: 'user/edit/:id', component: EditUserComponent},
  { path: 'user/edit', component: EditUserComponent},
  { path: 'product/edit', component: ProductsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  