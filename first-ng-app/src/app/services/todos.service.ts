import { Injectable } from '@angular/core';
import  { Todo } from '../model/todo.types'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      id: 0,
      userId: 1,
      title: 'groceries',
      completed: false,
    },
    {
      id: 1,
      userId: 1,
      title: 'car wash',
      completed: false,
    },
  ];
  constructor() {}
}
 // Services can either be provided to a single component and no where else by
 // creating the 'providers' property within a component and remove the "providedIn: 'root'"
 // value from the Injectable decorator above. Otherwise it will be provided in root, as 
 // mentioned above and all components will be able to use it. 