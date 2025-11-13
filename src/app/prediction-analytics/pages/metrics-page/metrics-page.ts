import { Component } from '@angular/core';

@Component({
  selector: 'app-metrics-page',
  imports: [],
  templateUrl: './metrics-page.html',
  styleUrl: './metrics-page.css',
})
export class MetricsPage {

  metricsItems = [
    { dateTime: '2025-10-08', team1: 'Real Madrid', team2: 'Arsenal', score: '2 - 1', result: 'W' },
    { dateTime: '2025-11-12', team1: 'Manchester City', team2: 'Inter', score: '3 - 0', result: 'W' },
    { dateTime: '2025-12-03', team1: 'Bayern München', team2: 'Barcelona', score: '1 - 1', result: 'D' },
    { dateTime: '2026-01-14', team1: 'Paris Saint-Germain', team2: 'Liverpool', score: '0 - 2', result: 'L' },
    { dateTime: '2026-02-18', team1: 'Juventus', team2: 'Borussia Dortmund', score: '2 - 2', result: 'D' }
  ]

}