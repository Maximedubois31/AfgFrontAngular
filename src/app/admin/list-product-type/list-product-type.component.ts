import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductTypeService } from '../api/productType-api.service';
import { ProductType } from '../models/productType.model';

@Component({
  selector: 'app-list-product-type',
  templateUrl: './list-product-type.component.html',
  styleUrls: ['./list-product-type.component.css']
})
export class ListProductTypeComponent implements OnInit {

  productsTypes: ProductType[] = [];
  
  constructor(private productTypeService: ProductTypeService, private router: Router) { }

  ngOnInit(): void {
    this.getProductsTypes();
  }

  getProductsTypes(): void {
    this.productTypeService.getAllProductType().subscribe((elements)=> this.productsTypes = elements);
  }

}
