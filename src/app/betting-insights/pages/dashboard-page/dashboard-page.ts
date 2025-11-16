import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-page',
  imports: [MatIconModule, CommonModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {

  dashboardItems = [
    { "id": 1, league: 'Champions', team1: 'Real Madrid', team2: 'Bayern München', dateTime: '2025-11-23 • 18:30', probHome: '48.6', probDraw: '27.3', probAway: '24.1' },
    { "id": 2, league: 'Champions', team1: 'Manchester City', team2: 'Inter', dateTime: '2025-12-04 • 21:00', probHome: '52.9', probDraw: '26.8', probAway: '20.3' },
    { "id": 3, league: 'Champions', team1: 'Arsenal', team2: 'Paris Saint-Germain', dateTime: '2026-01-15 • 20:45', probHome: '41.7', probDraw: '29.6', probAway: '28.7' },
    { "id": 4, league: 'Champions', team1: 'Barcelona', team2: 'Liverpool', dateTime: '2025-10-28 • 19:00', probHome: '46.4', probDraw: '28.1', probAway: '25.5' },
    { "id": 5, league: 'Champions', team1: 'Juventus', team2: 'Atletico de Madrid', dateTime: '2026-02-10 • 21:00', probHome: '44.2', probDraw: '31.0', probAway: '24.8' }
  ]

}
