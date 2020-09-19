import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/service/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsxyz: Products[] = [];

  constructor(private xyz: ProductsService) {}

  ngOnInit(): void {
    this.productsxyz = this.xyz.getProducts();
  }
}
