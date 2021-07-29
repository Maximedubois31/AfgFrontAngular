import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../../api/productApi.services';
import { ProductTypeService } from '../../api/productType-api.service';
import { Product } from '../../models/product.model';
import { ProductType } from '../../models/productType.model';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  productsTypes: ProductType[] = [];
  @Input() product!: Product;
  

  
  constructor(private productApiService: ProductApiService, private productTypeService: ProductTypeService, private router: Router, private activatedRouter : ActivatedRoute) { 
    
  }
  
  ngOnInit(): void {
    
    this.getProductsTypes();
    this.getProduit();
  }

  getProduit(): void {

    let id : any;
    if (this.activatedRouter.snapshot.paramMap.get("id")) {

      id = this.activatedRouter.snapshot.paramMap.get("id");
      this.productApiService.getProduct(Number(id)).subscribe(element => this.product = element);
    
    } else {
      
      this.product = ({} as Product);
    }
  }

  getProductsTypes(): void {
    this.productTypeService.getAllProductType().subscribe(elements => this.productsTypes = elements);
    
  }


  onSubmit(): void {
    console.log("Submit form !");
    console.log(this.product);
    this.productApiService.updateProduct(this.product).subscribe(() => this.goBack());
  }

  goBack(){
    let link = ['/products']
    this.router.navigate(link);
}

}
