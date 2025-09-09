import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { creatorder, getorder,Addrsses } from '../../../../shared/interfaces/orderinterface';
import { Orderservice } from './../../../../shared/servises/order/orderservice';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  placeorder!:creatorder;
  adress!:Addrsses
  addrsses: FormGroup = new FormGroup({
    fullName: new FormControl(null, Validators.required),
    streetAddress: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    district:new FormControl(null,Validators.required),
    country:new FormControl(null,Validators.required)
  });
  constructor(private _Orderservice:Orderservice ,private _Router: Router ,private toastr: ToastrService){}
  createorder()
  {
this.placeorder = {
  cartId:"" ,
    email:"" ,
    addrsses: this.addrsses.value,
    item: []
}
    this._Orderservice.createorder(this.placeorder).subscribe((res) => {
    this._Router.navigate(['/allorders']);
  });
  }

}
