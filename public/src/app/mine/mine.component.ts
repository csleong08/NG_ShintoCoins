import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  // resetOrder = { id: null, action: null, amount: null, value: null };
  Order;
  userAnswer: number;
  Answer: number = 0;

  constructor(private _httpService: HttpService) { }

  ngOnInit() { }

  Mine(){
    console.log("this is the Mine function");
    if(this.userAnswer == this.Answer){
      console.log("userAnswer == Answer!");
      this.userAnswer == null;
      this._httpService.addCoin(1);
      this._httpService.addValue(1);
      let rand = Math.floor(Math.random()*9999);
      this.Order = { id: rand, action: "Mined", amount: this._httpService.sumCoins, value: this._httpService.value };
      this._httpService.addOrder(this.Order);
      console.log(this.Order);
      this.Order = null;
    } else {
      console.log("userAnswer != Answer");
      this.userAnswer == 2;
    }
  }
}
