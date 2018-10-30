import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  value = this._httpService.value;
  owned = this._httpService.sumCoins;
  userSell: number;
  Order;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.value;
    this.owned;
  }

  Sell(){
    if (this.userSell > 0){
      console.log("buy ", this.userSell);
      let newOwned = this._httpService.sellCoin(this.userSell);
      this.owned = newOwned;
      let newValue = this._httpService.lessValue(this.userSell);
      this.value = newValue;
      let rand = Math.floor(Math.random()*9999);
      this.Order = { id: rand, action: "Sold", amount: this._httpService.sumCoins, value: this._httpService.value };
      this._httpService.addOrder(this.Order);
      console.log(this.Order);
      this.Order = null;
      this.value;
    } else {
      console.log("Quantity to sell cannot be less than zero");
    }
  }
}
