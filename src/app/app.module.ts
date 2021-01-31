import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ProductService } from './_services/product.services';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CustomAppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category';
import { StringControlPipe } from './pipes/string-control.pipe';
import { ProductModule } from './products/product.module';
import { HomeComponent } from './home/home.component';
import { MyInterceptorService } from './_services/my-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DropdownComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomAppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProductService, 
    PaymentTypeService, 
    ProductCategoryService, 
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
