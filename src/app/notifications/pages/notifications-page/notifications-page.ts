import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-notifications-page',
  imports: [MatIconModule],
  templateUrl: './notifications-page.html',
  styleUrl: './notifications-page.css',
})
export class NotificationsPage {
  notificationsItems = [
    {
      dateTime: '2025-10-08',
      title: 'Real Madrid Victory',
      body: 'Real Madrid beat Arsenal 2-1.',
      read: '1',
    },
    {
      dateTime: '2025-11-12',
      title: 'Manchester City dominates at home',
      body: 'Manchester City defeated Inter 3-0.',
      read: '1',
    },
    {
      dateTime: '2025-12-03',
      title: 'A draw between giants',
      body: 'Bayern Munich and Barcelona drew 1-1.',
      read: '0',
    },
    {
      dateTime: '2026-01-14',
      title: 'Liverpool surprises in Paris',
      body: 'Liverpool beat Paris Saint-Germain 2-0.',
      read: '0',
    },
    {
      dateTime: '2026-02-18',
      title: 'High-intensity match',
      body: 'Juventus and Borussia Dortmund drew 2-2.',
      read: '0',
    },
  ];
}
