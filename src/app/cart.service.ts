import { Injectable } from '@angular/core';
import {Product} from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : Array<Product> = []

  constructor() { }

  addToCart(product: Product): void {
    this.items.push(product)
    console.log(this.items)
  }

  getItems(): Array<Product> {
    return this.items
  }

  clearCart(): void {
    this.items.length = 0
  }
  
  remove(product: Product): void {
    var index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }


}