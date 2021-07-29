import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyApiService } from '../../api/companyApi.service';
import { ProductApiService } from '../../api/productApi.services';
import { ProductTypeService } from '../../api/productType-api.service';
import { Company } from '../../models/company.model';
import { Product } from '../../models/product.model';
import { ProductType } from '../../models/productType.model';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  companies: Company[] = [];
  productsTypes: ProductType[] = [];
  @Input() product!: Product;
  

  
  constructor(private companyApiService: CompanyApiService, private productApiService: ProductApiService, private productTypeService: ProductTypeService, private router: Router, private activatedRouter : ActivatedRoute) { 
    
  }
  
  ngOnInit(): void {
    
    this.getCompanies();
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

  getCompanies(): void {
    this.companyApiService.getCompanies().subscribe(elements => this.companies = elements);
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
