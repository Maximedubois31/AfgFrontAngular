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
import { UsersComponent } from './admin/users/users.component';
import { ListProductTypeComponent } from './admin/list-product-type/list-product-type.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListProductComponent,
    ProductsFormComponent,
    UsersComponent,
    ListProductTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
