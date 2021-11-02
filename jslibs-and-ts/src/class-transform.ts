import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

import { Product } from './product.model';

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 }
];

function manualTransformToClass01(){
    const p1 = new Product('A Carpet', 22.99);
    const p2 = new Product('A Book', 12.99);
    const loadedProducts = [p1, p2];
    
    for (const prod of loadedProducts) {
      console.log(prod.getInformation());
    }
}

function manualTransformToClass02(){
    const loadedProducts = products.map(prod => {
        return new Product(prod.title, prod.price);
    });
    
    for (const prod of loadedProducts) {
      console.log(prod.getInformation());
    }
}


function autoTransformToClass(){
    const loadedProducts = plainToClass(Product, products);
    
    for (const prod of loadedProducts) {
      console.log(prod.getInformation());
    }
}

manualTransformToClass01();
manualTransformToClass02();
autoTransformToClass();