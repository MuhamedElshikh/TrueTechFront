import { base } from './../../../base/environment';
import { Component } from '@angular/core';
import { Productservice } from '../../../shared/servises/products/productservice';
import { getproduct } from '../../../shared/interfaces/productss';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  productId!: string;
  branchId!: string;
  product!: getproduct;
  baseurl : string = base.baseurl;
  constructor(private _productservice: Productservice , private route: ActivatedRoute) {
  }
ngOnInit(): void {
  this.productId = this.route.snapshot.paramMap.get('id')!;
  this.branchId = this.route.snapshot.paramMap.get('branchId')!;
  this.getproductbyid(this.productId , this.branchId);
}
getproductbyid(productId: string , branchId: string){
this._productservice.getProductById(productId , branchId).subscribe((res) => {
  this.product = res;
  console.log(res);

});
}
}