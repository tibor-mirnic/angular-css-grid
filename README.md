# Angular CSS Grid

This CSS Grid uses [element-resize-detector](https://www.npmjs.com/package/element-resize-detector).

## ResizeHandlerService

Provide this service in app module

## Styles

Include `grid.scss` in your application bundle, if using Anglular CLI import it in `styles.scss`

## Example

```html
<div [breakGrid]="430">
  <div class="row">
    <div class="col-6">
      COL 6
    </div>
    <div class="col-6">
      <div [breakGrid]="300" class="row">
        <div class="col-4">
          LEVEL 2 - COL 4
        </div>
        <div class="col-8">
          LEVEL 2 - COL 8
        </div>
      </div>
    </div>
  </div>
</div>
111