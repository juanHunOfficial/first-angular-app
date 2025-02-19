import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  loadComponent: () => {
    return import('./pages/home/home.component').then((module) => module.HomeComponent)
  },
},
{
  path: 'todos',
  loadComponent: () => {
    return import('./pages/todo/todo.component').then((m) => m.TodoComponent)
  }
}];
// Similar to React, the router will have a component it will be loading for each path, 
// in the case of the " path: '' " we are using ' loadComponent ' to return the page that,
// through the router outlet, will be rendered on the screen. 
// NOTE: On the second path for 'todos' I swapped the 'module' for 'm', the functionality
// is the same. Most people tend to use this short hand like 'e' for 'event'.