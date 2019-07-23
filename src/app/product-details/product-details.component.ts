import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products, Product } from '../products';

import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product : Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products.values.find(it => it.id === params.get('productId'))
    })
  }

  addToCart(product: Product) : void {
    this.cartService.addToCart(product)
    alert(`${this.product.name} added to the cart`);
  }

}