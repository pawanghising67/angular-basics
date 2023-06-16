import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  sellers: string[];
  hide: boolean;
  constructor() {
    this.sellers = ["Best Buy","Amazon"]
    this.hide=true;
   }
   public onClick(){
    this.hide = false;
   }
   public getSellers(): string[]{
    return this.sellers;
   }

  ngOnInit(): void {
  }

}
