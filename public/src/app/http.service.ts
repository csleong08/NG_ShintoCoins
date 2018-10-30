import { Injectable } from '@angular/core';
// import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  sumCoins: number = 0;
  value: number = 0;
  allOrders = [];
  order;

  constructor() { }

  addCoin(num){
    this.sumCoins += num;
    console.log(this.sumCoins);
    return this.sumCoins;
  }
  sellCoin(num){
    this.sumCoins -= num;
    console.log(this.sumCoins);
    return this.sumCoins;
  }
  addValue(num){
    this.value += num;
    console.log(this.value);
    return this.value;
  }
  lessValue(num){
    this.value -= num;
    console.log(this.value);
    return this.value;
  }
  addOrder(Order){
    this.allOrders.push(Order);
    return this.allOrders;
  }
  getOrder(id){
    for(let odr of this.allOrders){
      if (id == odr.id) {
        this.order = odr;
        return this.order;
      }
    }
  }
}

