import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-sidenav',
  imports: [RouterModule, MatListModule, MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
})
export class Sidenav {
  menuItems = [
    { label: 'Home', icon: 'home', route: '/home' },
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Value Bets', icon: 'moving', route: '/value-bets' },
    { label: 'Filters & Search', icon: 'filter_alt', route: '/filters' },
    { label: 'Metrics & History', icon: 'finance', route: '/metrics' },
    { label: 'Favorites', icon: 'star', route: '/favorites' },
    { label: 'Match Details', icon: 'description', route: '/match' }
  ]

}
