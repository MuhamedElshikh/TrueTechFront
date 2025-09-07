import { Component, OnInit } from '@angular/core';
import { Authservises } from '../../../shared/servises/auth/authservises';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  constructor(public _AuthService: Authservises) {}
  islogin: boolean = false;
  ngOnInit(): void {
    this._AuthService.usertoken.subscribe(() => {
      if (this._AuthService.usertoken.getValue() != null) {
        this.islogin = true;
      } else {
        this.islogin = false;
      }
    });
//     this._CartService.cartItemNum.subscribe((v)=>{
// this.cartitemnum = v
//     })
//     console.log(this.cartitemnum);
    
  }
}
