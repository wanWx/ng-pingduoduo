import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  @Input() startDate = new Date();
  @Input() funtureDate: Date;

  private _MS_PER_SECOND = 1000;

  countDown$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.countDown$ = this.getCountDownObservable(this.startDate, this.funtureDate);
  }

  private getCountDownObservable(startDate: Date, funtureDate: Date) {
    return interval(1000).pipe(
      map(elapse => this.diffInSec(startDate, funtureDate) - elapse),
      takeWhile(gap => gap >= 0),
      tap(val => console.log(val)),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60)
      })),
      map(({hour, minute, second}) => `${hour}:${minute}:${second}`)
    );
  }

  private diffInSec = (start: Date, future: Date): number => {
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff / this._MS_PER_SECOND);
  }

}
