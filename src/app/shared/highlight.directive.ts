import { Directive, HostListener, ElementRef, Renderer, Input } from '@angular/core';
import { Product } from '../product/product.model';

@Directive({
    selector: '[appParentHighlight]'
  })
export class HighlightParentDirective {
  @Input()
  color: string;

  constructor(private el: ElementRef,
    private renderer: Renderer) {
    }

    @HostListener('mouseover')
    onMouseOver() {
      this.changeParentColor(this.color || 'grey');
    }

    @HostListener('mouseleave')
    onMouseLeave() {
      this.changeParentColor(null);
    }

    @HostListener('click')
    onClick() {
      this.changeParentColor(null);
    }

    private changeParentColor(color: string) {
      this.renderer.setElementStyle(this.el.nativeElement.parentElement, 'background', color);
    }
}
