import { Directive, ElementRef, Renderer } from '@angular/core';

// Directive decorator
@Directive({ selector: '[myHidden]' })
// Directive class
export class PaginationDirective {
    constructor(el: ElementRef, renderer: Renderer) {
     // Use renderer to render the element with styles
     //el.nativeElement.style.backgroundColor = 'yellow';
       renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
}
