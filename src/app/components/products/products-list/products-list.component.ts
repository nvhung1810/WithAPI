import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { products } from './../../../models/products.model';
import { ProductsService } from '../../../service/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  public _subscription: Subscription;
  public  _products: products[] = [];
  constructor(
    public productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this._subscription = this.productsService.getAllProducts().subscribe((data: products[]) => {
      this._products = data;
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    if(this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  OnDelete(id: number) { 
    this._subscription = this.productsService.DeleteProduct(id).subscribe((data: products) => {
      this.updateDataAfterDelete(id);
    })
  }

  updateDataAfterDelete(id: number) {
    for (var i = 0; i < this._products.length; i++) {
      if (this._products[i].id == id) {
        this._products.splice(i, 1);
        break;
      }
    }
  }
}
