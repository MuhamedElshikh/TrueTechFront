import { Component, OnInit } from '@angular/core';
import { Productservice } from '../../../shared/servises/products/productservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { adminProduct } from '../../../shared/interfaces/productss';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.html',
  styleUrls: ['./addproduct.css'],
  imports: [ReactiveFormsModule]
})
export class AddproductComponent implements OnInit {
  isEditMode: boolean = false;
  productId!: string;
  branchId!: string;

  AddproductForm!: FormGroup; 
  editproductForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _productservice: Productservice
  ) {}

  ngOnInit(): void {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    const branchIdParam = this.route.snapshot.paramMap.get('branchid');

    if (productIdParam && branchIdParam) {
      this.branchId = branchIdParam;
      this.productId = productIdParam;
      this.isEditMode = true;
    }

    this.AddproductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
this.editproductForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, Validators.required],
      stock: [0, Validators.required],
      branchId: [{ value: '', disabled: this.isEditMode }],
      branchName: [{ value: '', disabled: this.isEditMode }],
    });
    if (this.isEditMode) {
      this._productservice.getProductById(this.productId, this.branchId).subscribe({
        next: (res) => {
          this.editproductForm.patchValue({
            name: res.productName,
            description: res.description,
            price: res.price,
            stock: res.stock,
            branchId: res.branchId,
            branchName: res.branchName,
          });
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('File selected:', this.selectedFile.name);
    }
  }

  saveProduct(): void {
    
      if (this.isEditMode && this.editproductForm.valid) {
        this.updateProduct();
      } else if(!this.isEditMode && this.AddproductForm.valid) {
        this.addProduct();
      }
    
  }

  updateProduct(): void {
    const updatedProduct: adminProduct = this.editproductForm.value;
    if (this.productId) {
      this._productservice.updateproduct(updatedProduct, this.productId).subscribe({
        next: () => {
          alert('Product updated successfully');
          this.router.navigate(['/admin/products']);
        },
        error: err => console.error(err)
      });
    }
  }

  addProduct(): void {
    const formData = new FormData();
    
    formData.append('name', this.AddproductForm.get('name')?.value);
    formData.append('description', this.AddproductForm.get('description')?.value);
    
  
    if (this.selectedFile) {
      formData.append('pictureUrl', this.selectedFile);
    }
    
    
 
    this._productservice.addproduct(formData).subscribe({
      next: () => {
        alert('Product added successfully');
        this.router.navigate(['/admin/products']);
      },
      error: err => console.error(err)
    });
  }
}