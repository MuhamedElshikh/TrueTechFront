import { branch } from './../../../shared/interfaces/BranchInterface';
import { Router } from '@angular/router';
import { Productservice } from './../../../shared/servises/products/productservice';
import { Component, OnInit } from '@angular/core';
import { allproduct, getproduct } from '../../../shared/interfaces/productss';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  products!: allproduct[] ;
  loading = true;
constructor(private router: Router , private _Productservice : Productservice){}
  ngOnInit(): void {
   this.getallproduct()
  }
  getallproduct()
  {
    console.log('Fetching products...')
this._Productservice.getAllProducts().subscribe({
        next: (res) => {
          this.products = res;
          
          console.log(res)
          console.log('First product:', res[0]);
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
  }
   deleteproduct(id: string)
   {
    this._Productservice.deleteproduct(id).subscribe({
      next: () => {
      
      },
      error: (err) => console.error(err)
    });
   }
   goToAdd() {
    this.router.navigate(['/Admin/products/add']);
  }

  goToEdit(id: string ,branchid:string) {
    console.log(`${id}-${branchid}`)
    this.router.navigate([`/Admin/products/edit/${id}/${branchid}`]);
  }

}
