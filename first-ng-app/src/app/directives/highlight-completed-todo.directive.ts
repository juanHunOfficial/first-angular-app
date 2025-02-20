import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef);

  stylesEffect = effect(() =>{
    if (this.isCompleted()){
      this.el.nativeElement.style.textDecoration = "line-through";
      this.el.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.style.color = '#6c757d';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  })
}
// ElementRef gives you the reference of the specific element the user is manipulating.
// The inject function provides a specific service to w.e you injecting it into. In this 
// case I am injecting the ElementRef service from angular into the el element(the element 
// that was selected) that we are referencing and adding the ElementRef Service to it.