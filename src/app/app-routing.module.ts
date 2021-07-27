import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './admin/users/form/form.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
