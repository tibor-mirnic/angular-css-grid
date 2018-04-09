import { Directive, ElementRef, Input, Renderer2,
  OnInit, OnDestroy } from '@angular/core';
import { ResizeHandlerService } from '../resize-handler/resize-handler.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[breakGrid]'
})
export class BreakGridDirective implements OnInit, OnDestroy{

  @Input() breakGrid: number;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private resizeHandlerService: ResizeHandlerService
  ) {
    this.breakGrid = 0;
  }

  ngOnInit() {
    this.resizeHandlerService.listenTo(this.element, this.breakGrid, (brokeBelow: boolean) => {
      if (brokeBelow) {
        this.renderer.addClass(this.element.nativeElement, 'break-grid');
      } else {
        this.renderer.removeClass(this.element.nativeElement, 'break-grid');
      }
    });  
  }

  ngOnDestroy() {
    this.resizeHandlerService.removeListener(this.element);
  }
}
