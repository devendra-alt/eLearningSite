import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Products[] = [
    new Products(
      1,
      'C++ Advance Programming',
      'product 1 description',
      1500,
      '/assets/maxresdefault (2).jpg'
    ),
    new Products(
      2,
      'JAVA For Beginners',
      'product 2 description',
      599,
      '/assets/cb88-java-logo-001.webp'
    ),
    new Products(
      4,
      'C Language',
      'product 4 description',
      499,
      '/assets/2542771_af5d_4.jpg'
    ),
    new Products(
      5,
      'C Sharp For Beginners',
      'product 5 description',
      999,
      '/assets/1_21Rj1YNRo6a8dSJ4j_x1mw.png'
    ),
    new Products(
      6,
      'HTML',
      '#html is not a programming language',
      399,
      '/assets/6575a3b261.png'
    ),
    new Products(
      7,
      'Angular Framework',
      'product 7 description',
      1599,
      '/assets/angular_1200_630.jpg'
    ),
    new Products(
      8,
      'React Framework',
      'product 8 description',
      1899,
      '/assets/react_16_sized.jpg'
    ),
    new Products(
      9,
      'FireBase (Backend)',
      'product 9 description',
      1799,
      '/assets/social.png'
    ),
    new Products(
      10,
      'Raspberry Pi B+',
      'smallest cpu used for programming purpose',
      3999,
      '/assets/1280px-Raspberry_Pi_B+_illustration.svg.png'
    ),
    new Products(
      11,
      'Ardunio Uno',
      'Used for Embedded Systems',
      1499,
      '/assets/1024px-ArduinoUno.svg.png'
    ),
  ];

  constructor() {}

  getProducts(): Products[] {
    return this.products;
  }
}
