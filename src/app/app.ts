import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Sidenav } from "./layout/sidenav/sidenav";
import { Header } from "./layout/header/header";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    Sidenav,
    Header
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Web-Application');
}
