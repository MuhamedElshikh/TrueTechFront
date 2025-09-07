import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Authservises } from '../../../shared/servises/auth/authservises';

@Component({
  selector: 'app-register',
  imports: [RouterLink ,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],})
export class Register {
isloading:boolean = false
  errmsg!:string
  constructor(private _AuthService: Authservises, private _Router: Router) {}
  RegisterForm: FormGroup = new FormGroup(
    {
      DisplayNamen: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      PhoneNumber: new FormControl(null, [
        Validators.required,
        
      ]),
      password: new FormControl(null, [
        Validators.required,

        
      ]),
      RePassword: new FormControl(null, [Validators.required]),
    },
    
    this.RePassword
  );
  RePassword(x: AbstractControl) {
    if (x.get('password')?.value === x.get('RePassword')?.value) {
      return null;
    } else {
      x.get('RePassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
  }
    Register() {
   this.isloading = true
    if (this.RegisterForm.valid) {
      this._AuthService.Register(this.RegisterForm.value).subscribe({
        next: (res: any) => {
this.isloading = false;
          this._Router.navigate(['/login'])
          console.log(res);
        },
        
        error: (err: any) => {
          this.isloading = false;
         this.errmsg=err.error.message;
         
          console.log(err);
        },
      });
    }
  }
}
