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
      850,
      '/assets/6038586442907648.png'
    ),
    new Products(
      2,
      'JAVA For Beginners',
      'product 2 description',
      999,
      '/assets/Java-.png'
    ),
    new Products(
      4,
      'Unity Game Development',
      'product 4 description',
      5999,
      '/assets/unity-logo-black_1280.0.jpg'
    ),
    new Products(
      5,
      'Python from scratch',
      'product 5 description',
      999,
      '/assets/77626.jpg'
    ),
    new Products(
      6,
      'HTML',
      '#html is not a programming language',
      399,
      '/assets/unn123amed.png'
    ),
    new Products(
      7,
      'Angular Framework',
      'product 7 description',
      1599,
      '/assets/top-20-angularjs-developer-tools.jpg'
    ),
    new Products(
      8,
      'React Framework',
      'product 8 description',
      1899,
      '/assets/react-1.jpeg'
    ),
    new Products(
      9,
      'FireBase (Backend)',
      'product 9 description',
      1799,
      'assets/firebase.png'
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
