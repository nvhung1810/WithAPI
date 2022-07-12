import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// ProductsService
import { ProductsService } from './service/products.service';

// Http
import { HttpClientModule } from '@angular/common/http';
// Products
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsViewComponent } from './components/products/products-view/products-view.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsAddComponent } from './components/products/products-add/products-add.component';
import { ProductsEditComponent } from './components/products/products-edit/products-edit.component';
import { RouterModule, Routes } from '@angular/router';


export const _appRouter: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsViewComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent,
      },
      {
        path: ':id/edit',
        component: ProductsEditComponent,
      },
      {
        path: ':add',
        component: ProductsAddComponent,
      }

    ]
  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    HomeComponent,
    ProductsViewComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsEditComponent,
  ],
  // Module thì import vào cái import này
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(_appRouter), 
  ],
  // Là service thì import vào providers
  providers: [
    ProductsService,
    // Sau khi import service thành công thì khai báo vào constructor trong products_service đã tạo trước đó
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
