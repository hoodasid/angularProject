import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ComponentOverview } from './components/test/page1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ComponentOverview],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project');
}
