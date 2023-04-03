import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {
    constructor(private el: ElementRef) {
        // el.nativeElement.style.backgroundColor = 'floralwhite';
        el.nativeElement.style.border = '1px solid black';
    }
}

