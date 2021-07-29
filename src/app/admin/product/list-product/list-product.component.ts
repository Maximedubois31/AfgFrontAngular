import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from '../../api/productApi.services';
import { Product} from '../../models/product.model';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[] = []
  showActive: boolean = true;

  constructor(private productApiService: ProductApiService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productApiService.getProducts().subscribe(products => this.products = products)
  }

  deleteProduct(product: Product): void {
    this.productApiService.deleteProduct(product.id)
    .subscribe(_=> this.products = this.products.filter((elem) => elem.id != product.id));
  }

  active(product: Product) {
    product.productIsActive = !product.productIsActive;
    
    this.productApiService.updateProduct(product).subscribe();
  }

  goEdit(product: Product) {
    let link = ['/product/edit', product.id];
    this.router.navigate(link);
  }

  goNew() {
    let link = ['/product/edit'];
    this.router.navigate(link);
  }

  showActiveSwitch(): void {
    this.showActive = !this.showActive;
  }

  goBack(): void {
    this.router.navigate(['/products']);
}

}
