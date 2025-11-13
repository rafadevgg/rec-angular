import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Cards } from "./components/cards/cards";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Cards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rec-angular-oficial');
}
