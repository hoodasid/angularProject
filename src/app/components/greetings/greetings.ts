import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-greetings',
  imports: [],
  templateUrl: './greetings.html',
  styleUrl: './greetings.css',
})
export class Greetings {
  title = signal('Greetings');
  message = input('Defaul Greetings');
  message2 = input('default message2');
  message3 = input('def msg');
}
