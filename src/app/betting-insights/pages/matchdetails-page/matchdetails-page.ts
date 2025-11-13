import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matchdetails-page',
  imports: [MatIconModule, CommonModule],
  templateUrl: './matchdetails-page.html',
  styleUrl: './matchdetails-page.css',
})
export class MatchdetailsPage implements OnInit{

  constructor(private route: ActivatedRoute){}

  dashboardItems = [
    { "id": 1, league: 'Champions', team1: 'Real Madrid', team2: 'Bayern München', dateTime: '2025-11-23', hour: '18:30', probHome: '48.6', probDraw: '27.3', probAway: '24.1', last: '3-1-1', averageGoals: '2.8' },
    { "id": 2, league: 'Champions', team1: 'Manchester City', team2: 'Inter', dateTime: '2025-12-04', hour: '21:00', probHome: '52.9', probDraw: '26.8', probAway: '20.3', last: '1-2-1', averageGoals: '1.5' },
    { "id": 3, league: 'Champions', team1: 'Arsenal', team2: 'Paris Saint-Germain', dateTime: '2026-01-15', hour: '20:45', probHome: '41.7', probDraw: '29.6', probAway: '28.7', last: '2-1-3', averageGoals: '2.5'  },
    { "id": 4, league: 'Champions', team1: 'Barcelona', team2: 'Liverpool', dateTime: '2025-10-28', hour: '19:00', probHome: '46.4', probDraw: '28.1', probAway: '25.5', last: '3-2-1', averageGoals: '2.6'  },
    { "id": 5, league: 'Champions', team1: 'Juventus', team2: 'Atletico de Madrid', dateTime: '2026-02-10', hour: '21:00', probHome: '44.2', probDraw: '31.0', probAway: '24.8', last: '1-2-3', averageGoals: '3.4'  }
  ]

  selectedMatch: any = null;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.selectedMatch = this.dashboardItems.find(item => item.id === id) || null;
    } else {
      this.selectedMatch = null;
    }
    
  }

}
