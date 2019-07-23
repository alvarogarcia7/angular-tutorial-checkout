export class Product{
  constructor (obj: any){
    for(var property in obj){
      this[property] = obj[property]
    }
  }
  isAlert(): boolean{
    return this.price > 700
  }
}

export class Products {
  values : Array<Product> = [
    new Product({
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      id: 'uuid-1234'
    }),
    new Product({
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      id: 'uuid-1238'
    }),
    new Product({
      name: 'Phone Standard',
      price: 299,
      description: '',
      id: 'uuid-1233'
    })
  ];
}

let products = new Products();

export {products};

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/