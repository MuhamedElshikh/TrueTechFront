import { branch } from './../../../shared/interfaces/BranchInterface';
import { allproduct, productByBranch } from './../../../shared/interfaces/productss';
import { Component } from '@angular/core';
import { Productservice } from '../../../shared/servises/products/productservice';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { base } from '../../../base/environment';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
    baseurl : string = base.baseurl;
product! : productByBranch[];
branchId!: string ;
$: any;
  constructor(private _productService: Productservice , private _route: ActivatedRoute) {}
ngOnInit(): void {
  this.branchId = this._route.snapshot.paramMap.get('id')!;
  this.GetAllProducts(this.branchId);
}
GetAllProducts(branchId: string) 
{
  this._productService.getProductsByBranchId(branchId).subscribe({
    next: (res) => {
      console.log("Products response:", res);
      this.product = res;
    },
    error: (err) => {
      console.error("Error fetching products:", err);
    }
  });
}}