import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../model/todo.types';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems);
  }
}
// ngOnInit and OnInit functions are similar to a useEffect in React that is rendering
// only when the component mounts.
// NOTE: todoItems = signal<Array<Todo>>([]);
// the syntax above is specific to TS it basically reads that the signal above is of
// type Array AND the array is of type Todo. The types are indicated by the <> tags. 
// the parenthesis () is similar to the function call of a useState hook in React, 
// where it is basically setting the initial value to w.e is inside; in this case 
// an empty array [].