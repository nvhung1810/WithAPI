import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/models/products.model';
import { ProductsService } from '../../../service/products.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  public product: products;
  public _subscription: Subscription;
  public _subscriptionPara: Subscription;
  public  _products: products[] = [];


  constructor(
    public productService: ProductsService,
    public _router: Router,
    public _ActivatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.product = new products();
    this.loadData();
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    else if (this._subscriptionPara) {
      this._subscriptionPara.unsubscribe();
    }
  }

  loadData() {
    this._subscriptionPara = this._ActivatedRoute.params.subscribe((data: Params) => {
      let id = data['id'];
      // this._subscription = this.productService.getProduct(id).subscribe((data: products[]) => {
      //   this.product = data;
      // })
      this._subscription = this.productService.getProduct(id).subscribe((data: products) => {
        this.product = data;
        console.log(this.product)
      })
    })
  }

  onEditProduct(): void {
    this._subscription = this.productService.updateProduct(this.product).subscribe((data: products) => {
      this._router.navigate(['products']);
    })
  }

}
