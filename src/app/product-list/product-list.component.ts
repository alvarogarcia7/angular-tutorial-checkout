import { Component } from '@angular/core';

import { products } from '../products';

import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(
    private cartService: CartService
  ) { 
  }

  share(event, product) {
    console.log(event)
    console.log(product)
    console.log('This product has been shared: ' + product.name + '!');
  }

  addToCart(event, product) {
    this.cartService.addToCart(product)
  }

  onNotify(){
    console.log('You will be notified');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/