import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-valuebets-page',
  imports: [CommonModule, MatIconModule],
  templateUrl: './valuebets-page.html',
  styleUrl: './valuebets-page.css',
})
export class ValuebetsPage {

  valueBetsItems = [
    {
      league: 'Champions',
      badge: 'HIGH',
      team1: 'Real Madrid',
      team2: 'Bayern München',
      dateTime: '2025-10-08',
      value: '14.2',
      detailValue: 'Home Win',
      probability: '49.3',
      bookmarker: '2.28',
      implied: '43.9'
    },
    {
      league: 'Champions',
      badge: 'HIGH',
      team1: 'Manchester City',
      team2: 'Inter',
      dateTime: '2025-11-19',
      value: '11.9',
      detailValue: 'Away Win',
      probability: '36.5',
      bookmarker: '2.74',
      implied: '36.4'
    },
    {
      league: 'Champions',
      badge: 'HIGH',
      team1: 'Arsenal',
      team2: 'Paris Saint-Germain',
      dateTime: '2025-12-03',
      value: '16.7',
      detailValue: 'Home Win',
      probability: '52.8',
      bookmarker: '2.10',
      implied: '47.6'
    },
    {
      league: 'Champions',
      badge: 'MEDIUM',
      team1: 'Barcelona',
      team2: 'Liverpool',
      dateTime: '2026-01-21',
      value: '12.4',
      detailValue: 'Draw',
      probability: '30.6',
      bookmarker: '3.15',
      implied: '31.7'
    },
    {
      league: 'Champions',
      badge: 'MEDIUM',
      team1: 'Juventus',
      team2: 'Atletico de Madrid',
      dateTime: '2026-02-18',
      value: '13.5',
      detailValue: 'Home Win',
      probability: '46.2',
      bookmarker: '2.45',
      implied: '40.8'
    }
  ]

}
