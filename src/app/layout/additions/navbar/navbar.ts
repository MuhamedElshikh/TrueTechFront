import { Component, OnInit } from '@angular/core';
import { Authservises } from '../../../shared/servises/auth/authservises';
import { RouterLink } from '@angular/router';
import { Cartservice } from '../../../shared/servises/cart/cartservice';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  cartItemCount:number =0;
  constructor(public _AuthService: Authservises ,private _CartService : Cartservice) {}
  islogin: boolean = false;
  isAdmin:boolean = false;
  ngOnInit(): void {
    this._AuthService.usertoken.subscribe(() => {
      if (this._AuthService.usertoken.getValue() != null) {
        this.islogin = true;
      } else {
        this.islogin = false;
      }
      if(this._AuthService.getUserrole()=="Admin")
      {
          this.isAdmin=true;
      }
    });
    this._CartService.cart$.subscribe(cart => {
    if (cart) {
      this.cartItemCount = cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    } else {
      this.cartItemCount = 0;
    }
  });

  this._CartService.getcart().subscribe(cart => {
    this._CartService.setCart(cart);
  });
  }
}
