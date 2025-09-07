import { Component } from '@angular/core';
import { Product } from "../../additions/product/product";
import { ProductDetails } from "../../additions/product-details/product-details";

@Component({
  selector: 'app-products',
  imports: [Product],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

}
