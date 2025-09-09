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
import { Cart } from './layout/pages/cart/cart';
import { Checkout } from './layout/additions/order/checkout/checkout';
import { Allorder } from './layout/additions/order/allorder/allorder';
import { routingGuard } from './shared/guardes/routing-guard';
import { CustmorLayout } from './layout/custmor-layout/custmor-layout';
import { Product } from './layout/admin/product/product';
import { AddproductComponent } from './layout/admin/addproduct/addproduct';

export const routes: Routes = [  
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'Custmor',component:CustmorLayout,children:[{path:'',redirectTo:'home',pathMatch:'full'},
         {path:'home',component:Home},
        {path: 'branch', component: Branch ,canActivate:[routingGuard]},
        { path: 'product/:id', component: Products,canActivate:[routingGuard] },
        { path: 'getproduct/:id/:branchId', component: ProductDetails ,canActivate:[routingGuard]},
        {path:'cart',component:Cart,canActivate:[routingGuard]},
        {path:'Checkout',component:Checkout,canActivate:[routingGuard]},
        {path:'orders' , component:Allorder,canActivate:[routingGuard]}
    ]},
    {path:'Admin',component:CustmorLayout,children:[{path:'',redirectTo:'product',pathMatch:'full'},
                { path: 'product', component: Product,canActivate:[routingGuard] },
                { path: `products/edit/:id/:branchid`, component: AddproductComponent,canActivate:[routingGuard] },
                { path: 'products/add', component: AddproductComponent,canActivate:[routingGuard] },
    ]},
{ path: 'login', component: Login },
{ path: 'register', component: Register },
    


    // { path: 'home', component: Home ,canActivate:[routingGuard]},
    // { path: 'branch', component: Branch ,canActivate:[routingGuard]},
    // { path: 'product/:id', component: Products,canActivate:[routingGuard] },
    // { path: 'getproduct/:id/:branchId', component: ProductDetails ,canActivate:[routingGuard]},
    // {path:'cart',component:Cart,canActivate:[routingGuard]},
    // {path:'Checkout',component:Checkout,canActivate:[routingGuard]},
    // {path:'orders' , component:Allorder,canActivate:[routingGuard]}
];
