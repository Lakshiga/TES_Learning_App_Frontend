import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavbar } from './layouts/admin-navbar/admin-navbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdminNavbar,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TES_Learning_App');
}
