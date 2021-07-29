import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesFormComponent } from './admin/company/companies-form/companies-form.component';
import { ListCompanyComponent } from './admin/company/list-company/list-company.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { ProductsFormComponent } from './admin/product/products-form/products-form.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  { path: 'products', component: ListProductComponent},
  { path: 'product/edit/:id', component: ProductsFormComponent},
  { path: 'product/edit', component: ProductsFormComponent},
  { path: 'users', component: UsersComponent},
  { path: 'companies', component: ListCompanyComponent},
  { path: 'company/edit/:id', component: CompaniesFormComponent},
  { path: 'company/edit', component: CompaniesFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
