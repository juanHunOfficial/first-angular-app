import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../../components/greeting/greeting.component';
import { CounterComponent } from '../../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage = signal('Hello World!');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
}
// Within the export we add things like signals and event handlers with 
// their respective functions. Typescript will go a step further in clarifying
// the values of the params being passed. This is done in a similar format to 
// python's practice of Type Annotation. So it is the 'event:' followed by
// the type associated with that event which in this case is 'KeyboardEvent'. 
// This is unique to TS and makes it a more strongly typed version of JS. 