import { Component, OnInit } from '@angular/core';

import { CartService, Subtotal } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items : Array<Product>;
  
  constructor(
    private cartService: CartService
  ) {
    this.items = this.cartService.getItems()
  }

  ngOnInit() {
    
  }

  remove(product){
    this.cartService.remove(product);
  }

  getSubtotal(): Subtotal{
    return this.cartService.calculateSubtotal()
  }

}