export class ResizeHandler {

  public previousWidth: number;
  public breakingPoint: number;

  constructor(previousWidth: number, breakingPoint: number) {
    this.previousWidth = previousWidth;
    this.breakingPoint = breakingPoint;
  }

  break(width: number, action: (brokeBelow: boolean) => void) {
    if (width < this.breakingPoint && width < this.previousWidth && this.previousWidth > this.breakingPoint) {
      this.previousWidth = width;
      action(true);
    }
    else if (width > this.breakingPoint && width > this.previousWidth && this.previousWidth < this.breakingPoint) {
      this.previousWidth = width;
      action(false);
    }
  }
}
