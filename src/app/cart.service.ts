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

  constructor(private http: HttpClient) { }

  addToCart(product: Product): void {
    this.items.push(product)
    this.calculateSubtotal()
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
      this.calculateSubtotal()
    }
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  calculateSubtotal(): Subtotal {
    const total = this.items.reduce((acc, ele) => acc + ele.price, 0),
    const base = total / 1.21;
    const tax = total - base;
    return new Subtotal (base, tax, total);
  }
}

export class Subtotal {
  base: number
  tax: number
  total: number

  constructor(base, tax, total){
    this.base = base;
    this.tax = tax;
    this.total = total;
  }
}