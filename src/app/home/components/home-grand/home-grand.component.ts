import { Component, OnInit, Injectable, Injector } from '@angular/core';

@Injectable()
class Product {
  constructor(private name: string) {

  }
}

@Injectable()
class PurchaseOrder {
  private amount: number;
  constructor(private product: Product) {  
  }
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  date: Date;
  price: number;
  constructor() { }

  ngOnInit() {
    this.date = this.munusDays(new Date(), 60);
    this.price = 123.32;
  }

  munusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
}
