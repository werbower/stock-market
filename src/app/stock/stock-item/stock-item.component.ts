import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock: Stock;
  public stockClasses;
  public stockStyles;
  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock', 'TSC', 85, 80);
    this.stocks = [
      new Stock('Test stock','TS',85,80),
      new Stock('Second stock','SS',10,20),
      new Stock('Last stock','LS',876,765)
    ];

    let diff = (this.stock.price / this.stock.previousPrice - 1);
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses= {
      'positive': this.stock.isPositiveChange,
      'negative': !this.stock.isPositiveChange,
      'large-change': largeChange,
      'small-change': !largeChange
    };
    this.stockStyles= {
      'color': this.stock.isPositiveChange?'green':'red',
      'font-size': largeChange?'1.2em':'0.8em'
    };

  }

  toggleFavorite(event, index=0) {
    console.log('we are toggling the favorite', event,index);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

}
