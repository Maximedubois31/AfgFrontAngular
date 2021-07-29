import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { ListProductComponent } from './admin/product/list-product/list-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsFormComponent } from './admin/product/products-form/products-form.component';
import { FormsModule } from '@angular/forms';
import { UserApiService } from './admin/api/user-api.service';
import { FormComponent } from './admin/users/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './admin/users/list-user/users.component';
import { EditUserComponent } from './admin/users/edit/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListProductComponent,
    ProductsFormComponent,
    UsersComponent,
    FormComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
