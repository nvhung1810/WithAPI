import { Component, OnInit, OnDestroy } from '@angular/core';
import { products } from 'src/app/models/products.model';
import { ProductsService } from '../../../service/products.service';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  // biến chứa thông tin sản phẩm khi nhập
  public product: products;
  public _subscription: Subscription;

  constructor(
    public productService: ProductsService,
    public _router: Router,
  ) { }

  ngOnInit() {
    this.product = new products();
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  onCreateProduct(): void {
    this._subscription = this.productService.createProduct(this.product).subscribe(data => {
      if(data && data.id) {
        this._router.navigate(['products']);
      }
    })
  }
}
