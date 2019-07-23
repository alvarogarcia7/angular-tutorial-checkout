import { Injectable } from '@angular/core';
import {Product} from './products';
import { HttpClient} from '@angular/common/http'; 

import { Input, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : Array<Product> = []
  @Output() notify = new EventEmitter()
  @Output() subtotal: Subtotal

  constructor(private http: HttpClient) { }

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

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}

export class Subtotal{
  base: number
  tax: number
  total: number
}