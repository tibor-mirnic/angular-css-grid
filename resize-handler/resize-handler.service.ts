import * as elementResizeDetectorMaker from 'element-resize-detector';

import { Injectable, ElementRef } from '@angular/core';

import { ResizeHandler } from './resize-handler';

@Injectable()
export class ResizeHandlerService {

  public handler: elementResizeDetectorMaker.Erd;

  constructor() {
    this.handler = elementResizeDetectorMaker({
      strategy: 'scroll'
    });
  }

  listenTo(elementRef: ElementRef, breakingPoint: number, action: (brokeBelow: boolean) => void) {
    const orgRect = (<HTMLElement>elementRef.nativeElement).getBoundingClientRect();
    const rh = new ResizeHandler(orgRect.width, breakingPoint);

    this.handler.listenTo(elementRef.nativeElement, (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      rh.break(rect.width, action);
    });
  }

  removeListener(elementRef: ElementRef) {
    this.handler.removeListener(elementRef.nativeElement, () => {});
  }

}
