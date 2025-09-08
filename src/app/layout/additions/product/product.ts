import { Authservises } from './../../../shared/servises/auth/authservises';
import { Cartservice } from './../../../shared/servises/cart/cartservice';
import { branch } from './../../../shared/interfaces/BranchInterface';
import { allproduct, productByBranch } from './../../../shared/interfaces/productss';
import { Component } from '@angular/core';
import { Productservice } from '../../../shared/servises/products/productservice';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { base } from '../../../base/environment';
import { cart, CartItem } from '../../../shared/interfaces/cartInterface';

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
cart!:cart;
  constructor(private _productService: Productservice , private _route: ActivatedRoute ,private _cartservice : Cartservice ,private _Authservises : Authservises) {}
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
}
 addtocart(productItem: productByBranch) {
    const cartItem: CartItem = {
      productId: productItem.id,
      branchId: productItem.branchProducts[0].branchId,
      quantity : 1
    };
    
const email = this._Authservises.getUserEmail();
console.log(email)
if (!email) {
  throw new Error("User email is missing from token");
}
const cartData: cart = {
  id: email,
  branchId: productItem.branchProducts[0].branchId,
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