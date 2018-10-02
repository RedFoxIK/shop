import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appParentHighlight]'
  })
export class HighlightParentDirective {
  @Input()
  color: string;

  constructor(private el: ElementRef,
    private renderer: Renderer2) {
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
      this.renderer.setStyle(this.el.nativeElement.parentElement, 'background', color);
    }
}
