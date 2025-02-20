import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../model/todo.types';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemsComponent } from '../../components/todo-items/todo-items.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todo',
  imports: [TodoItemsComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
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
