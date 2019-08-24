import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items = [
    {
      id: 1,
      name: 'Item No. 1'
    },
    {
      name: 'Item No. 2'
    },
    {
      name: 'Item No. 3'
    },
    {
      id: 4,
      name: 'Item No. 4'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
