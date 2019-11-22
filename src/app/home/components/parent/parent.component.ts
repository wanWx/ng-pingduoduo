import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild('inputRef', {static: true}) inputRef: ElementRef;
  constructor() { }
  title = '';
  startDate = new Date(2019, 6, 1);
  funtureDate = new Date(2019, 2, 1);
  ngOnInit() {
    fromEvent(this.inputRef.nativeElement, 'input')
      .subscribe((ev: any) => console.log(ev.target.value));
  }

}
