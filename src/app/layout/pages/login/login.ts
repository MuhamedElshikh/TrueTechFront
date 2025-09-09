import { Component } from '@angular/core';
import { Authservises } from '../../../shared/servises/auth/authservises';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {
  isloading: boolean = false;
  errmsgg!: string;
  email!:string
  constructor(private _AuthService: Authservises,private _router: Router) { }
  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null
    ),
    });
    login() {
    this.isloading = true;
    if (this.loginform.valid) {
      this._AuthService.login(this.loginform.value).subscribe({
        next: (res) => {
          if ('token' in res) {
            this.isloading = false;
            localStorage.setItem('usertoken', res.token);
            this._AuthService.decodetoken();
            if(this._AuthService.getUserrole()=="Custmor")
            {
            this._router.navigate(['/Custmor']);
            }
            else
            {
                          this._router.navigate(['/Admin']);

            }
            console.log(res);
          }
        },
        error: (err) => {
          this.isloading = false;
          console.log(err);
          this.errmsgg = err.error.message;
        },
      });
    }
  }


}
