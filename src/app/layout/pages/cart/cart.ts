import { Component, OnInit } from '@angular/core';
import { Cartservice } from '../../../shared/servises/cart/cartservice';
import {  cart, getcart,CartItem} from '../../../shared/interfaces/cartInterface';
import { Authservises } from '../../../shared/servises/auth/authservises';
import { FormsModule } from '@angular/forms';
import { base } from '../../../base/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [FormsModule ,RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  cartshow!: getcart;
  cart!: cart;
  numitem!: any;
  baseurl: string = base.baseurl;

  constructor(
    private _cartservice: Cartservice,
    private _authservice: Authservises
  ) {}

  ngOnInit(): void {
    this._cartservice.cart$.subscribe(cart => {
      if (cart) {
        this.cartshow = cart;
      }
    });

    this.getcart();
  }

  getcart() {
    this._cartservice.getcart().subscribe({
      next: (res) => {
        this._cartservice.setCart(res);
      },
      error: (err) => {
        console.error('Error fetching cart:', err);
      },
    });
  }

  updata(productid: string, count: number) {
    const cartItem: CartItem = {
      productId: productid,
      branchId: this.cartshow.branchId,
      quantity: count   
    };

    const email = this._authservice.getUserEmail();
    if (!email) {
      throw new Error("User email is missing from token");
    }

    const cartData: cart = {
      id: email,
      branchId: this.cartshow.branchId,
      cartItems: [cartItem]
    };

    this._cartservice.addToCart(cartData).subscribe({
      next: (res) => {
        this._cartservice.setCart(res);
      },
      error: (err) => {
        console.error('Error adding to cart:', err);
      }
    });
  }

  edit(id: string, numitem: any) {
    this.updata(id, numitem);
  }

  rmoveitem(id: string) {
    this._cartservice.removeitem(id).subscribe({
      next: (res) => {
        this._cartservice.setCart(res);
      },
      error: (err) => {
        console.error('Error removing item:', err);
      }
    });
  }

  rmoveall() {
    this._cartservice.rmovecart().subscribe({
      next: (res) => {
        this._cartservice.setCart(res);
        this.getcart();
      },
      error: (err) => {
        console.error('Error removing all items:', err);
      }
    });
  }
}
