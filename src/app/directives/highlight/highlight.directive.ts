import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    // Inyección de dependencias
    element: ElementRef
  ) { 
    element.nativeElement.style.backgroundColor = 'red';
  }

}
