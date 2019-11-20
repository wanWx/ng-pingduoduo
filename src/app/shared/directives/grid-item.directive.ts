import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective {

  constructor(private elr: ElementRef, private rd2: Renderer2) {
    this.rd2.setStyle(this.elr.nativeElement, 'display', 'grid');
    this.rd2.setStyle(this.elr.nativeElement, 'grid-template-areas', `'image' 'title'`);
    this.rd2.setStyle(this.elr.nativeElement, 'place-items', 'center');
    this.rd2.setStyle(this.elr.nativeElement, 'width', '4rem');
  }

}
