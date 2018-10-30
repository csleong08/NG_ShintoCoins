import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  Orders;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.showAllOrders();
  }

  showAllOrders(){
    this.Orders = this._httpService.allOrders;
  }
}
