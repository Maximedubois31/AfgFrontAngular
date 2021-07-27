import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../../api/productApi.services';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  @Input() product!: Product;
  
  
  constructor(private productApiService: ProductApiService, private router: Router, private activatedRouter : ActivatedRoute) { 
    
  }
  
  ngOnInit(): void {
    let id : any;
    if (this.activatedRouter.snapshot.paramMap.get("id")) {
      id = this.activatedRouter.snapshot.paramMap.get("id");
    }
    this.productApiService.getProduct(Number(id)).subscribe((element)=> this.product = element);
  }

  onSubmit(): void {
    console.log("Submit form !");
    //this.productApiService.updateProduct(this.product).subscribe(() => this.goBack());
  }

  goBack(){
    let link = ['/product']
    this.router.navigate(link);
}

}
