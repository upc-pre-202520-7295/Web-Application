import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [MatIconModule, RouterModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  homeCards = [
    {
      title: 'Dashboard',
      description: 'Machine learning-powered probability analysis for upcoming football matches',
      icon: 'dashboard',
      color: 'linear-gradient(to right, #00164D, #006C49)',
      route: '/dashboard'
    },
    {
      title: 'Value Bets',
      description: 'Opportunities where our ML model identifies higher probability than bookmaker odds suggest',
      icon: 'moving',
      color: 'linear-gradient(to right, #032978, #00885D)',
      route: '/value-bets'
    },
    {
      title: 'Filters & Search',
      description: 'Find specific matches and teams using advanced filtering options',
      icon: 'filter_alt',
      color: 'linear-gradient(to right, #3853a3ff, #049769ff)',
      route: '/filters'
    },
    {
      title: 'Metrics & History',
      description: 'Historical performance data and key statistics for teams',
      icon: 'finance',
      color: 'linear-gradient(to right, #536cbdff, #0d8b63ff)',
      route: '/metrics'
    },
    {
      title: 'Favorites & Preferences',
      description: 'Access your favorite teams and matches quickly',
      icon: 'star',
      color: 'linear-gradient(to right, #465ca5ff, #1d835dff)',
      route: '/favorites'
    }

  ]

}
