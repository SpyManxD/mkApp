import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [
    {
      name: 'Ürün 1',
      description: 'Ürün 1 açıklaması',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      name: 'Ürün 2',
      description: 'Ürün 2 açıklaması',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      name: 'Ürün 3',
      description: 'Ürün 3 açıklaması',
      imageUrl: 'https://via.placeholder.com/300x200'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
