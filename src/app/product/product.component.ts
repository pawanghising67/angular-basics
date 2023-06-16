import { Component, OnInit } from '@angular/core';

interface Product {
  id: string;
  name: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products: Product[];
  constructor() {
    this.products=[
      {
        id:"1",
        name:"Mac book Pro"
      },
      {
        id:"2",
        name:"Iphone"
      }
    ];
  }

  public getProducts(){
    return this.products;
  }

  ngOnInit(): void {
  }

}
