import { Component, inject, OnInit } from '@angular/core';
import { TodoServices } from '../services/todos';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {
  TodoServices = inject(TodoServices);
  
  ngOnInit(): void {
    console.log(this.TodoServices.todoItems);
  }
}
