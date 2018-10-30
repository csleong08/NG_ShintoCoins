import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  value = this._httpService.value;
  owned = this._httpService.sumCoins;
  userBuy: number;
  Order;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.value;
    this.owned;
  }

  Buy(){
    if (this.userBuy > 0){
      console.log("buy ", this.userBuy);
      let newOwned = this._httpService.addCoin(this.userBuy);
      this.owned = newOwned;
      let newValue = this._httpService.addValue(this.userBuy);
      this.value = newValue;
      let rand = Math.floor(Math.random()*9999);
      this.Order = { id: rand, action: "Bought", amount: this._httpService.sumCoins, value: this._httpService.value };
      this._httpService.addOrder(this.Order);
      console.log(this.Order);
      this.Order = null;
      this.value;
    } else {
      console.log("Quantity to buy cannot be less than zero");
    }
  }
}
