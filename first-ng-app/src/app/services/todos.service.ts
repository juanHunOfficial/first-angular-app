import { Injectable, inject } from '@angular/core';
import  { Todo } from '../model/todo.types'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
 // Services can either be provided to a single component and no where else by
 // creating the 'providers' property within a component and remove the "providedIn: 'root'"
 // value from the Injectable decorator above. Otherwise it will be provided in root, as 
 // mentioned above and all components will be able to use it. 