import { branch } from './shared/interfaces/BranchInterface';
import { getproduct } from './shared/interfaces/productss';
import { Routes } from '@angular/router';
import { log } from 'console';
import { Login } from './layout/pages/login/login';
import { Register } from './layout/pages/register/register';
import { Branch } from './layout/additions/branch/branch';
import { Home } from './layout/pages/home/home';
import { Products } from './layout/pages/products/products';
import { ProductDetails } from './layout/additions/product-details/product-details';

export const routes: Routes = [  
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'branch', component: Branch },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'product/:id', component: Products },
    { path: 'getproduct/:id/:branchId', component: ProductDetails },
];
