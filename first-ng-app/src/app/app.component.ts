import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';

// The Template is the section that will actually be rendered on the screen. 
// The styles specified within the component this will have a distinct 'code' added
// to it in the elements section of the DevTools. This prevents leaking CSS styles,
// remember CSS style by default have a global scope by default. 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
  `,
  styles: [
    `
      main {
        padding: 16px
      }
    `
  ],
})
export class AppComponent {
  title = 'first-ng-app';
}

// Creating new component, head to the terminal and type 'ng g c <componentName>'.
// This is the short hand version of 'ng generate component <componentName>'.
// When you do this, the files will be created within the src/app folder which we don't want,
// so for components type 'ng g c components/<componentName>'. If the components folder is 
// not created, it will be created along with the component and its respective files.