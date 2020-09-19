import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/products';
import { MessService } from 'src/app/service/mess.service';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css'],
})
export class ProductitemComponent implements OnInit {
  @Input() productsItem: Products;

  constructor(private message: MessService) {}

  ngOnInit() {}

  handlecart() {
    this.message.throwmessage(this.productsItem);
  }
}
