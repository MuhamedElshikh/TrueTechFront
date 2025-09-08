import { Cartservice } from './../../../shared/servises/cart/cartservice';
import { base } from './../../../base/environment';
import { Component } from '@angular/core';
import { Productservice } from '../../../shared/servises/products/productservice';
import { getproduct, productByBranch } from '../../../shared/interfaces/productss';
import { ActivatedRoute } from '@angular/router';
import { Authservises } from '../../../shared/servises/auth/authservises';
import { cart, CartItem } from '../../../shared/interfaces/cartInterface';

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
  cart!: cart;
  constructor(private _productservice: Productservice , private route: ActivatedRoute ,private _cartservice : Cartservice ,private _authservice: Authservises) {
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
 addtocart(productItem: getproduct) {
    const cartItem: CartItem = {
      productId: productItem.productId,
      branchId: productItem.branchId,
      quantity : 1
    };
    
const email = this._authservice.getUserEmail();
console.log(email)
if (!email) {
  throw new Error("User email is missing from token");
}
const cartData: cart = {
  id: email,
  branchId: productItem.branchId,
  cartItems: [cartItem]
 }
    this._cartservice.addToCart(cartData).subscribe({
      next: (res) => {
        this.cart = res;       
        console.log('Cart updated successfully:', res);
      },
      error: (err) => {
        console.error('Error adding to cart:', err);
      }
    });
  }

}