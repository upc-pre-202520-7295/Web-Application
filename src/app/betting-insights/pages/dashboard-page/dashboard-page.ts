import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatchsService } from '../../services/matchs';
import { Match } from '../../model/match';


@Component({
  selector: 'app-dashboard-page',
  imports: [MatIconModule, CommonModule, MatFormFieldModule, FormsModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage implements OnInit {

  constructor(private router: Router, private matchsService: MatchsService) {}

  allMatches: Match[] = [];
  dashboardItems: any[] = [];

  searchTerm: string = '';
  selectedLeague: string = '';

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches(): void {
    this.matchsService.getAll().subscribe((resp: any) => {

      this.allMatches = resp.data;

      this.dashboardItems = this.allMatches.map((m) => ({
        id: crypto.randomUUID(),
        league: m.match_info.league,
        team1: m.home_team_name,
        team2: m.away_team_name,
        img1: m.home_team_image,
        img2: m.away_team_image,
        dateTime: `${m.match_info.date} ${m.match_info.time}`,
        hour: m.match_info.time.substring(0, 5),
        probHome: Math.round(m.predictions.result.home_win_prob * 100),
        probDraw: Math.round(m.predictions.result.draw_prob * 100),
        probAway: Math.round(m.predictions.result.away_win_prob * 100),

        fullData: m
      }));
    });
  }

  gotToDetails(item: any): void {
    this.router.navigate(
      ['/match-details'],
      { state: { match: item.fullData } }
    );
  }

  applyFilters(): void {
    let filtered = [...this.dashboardItems];

    if (this.searchTerm.trim() !== '') {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (m) =>
          m.team1.toLowerCase().includes(term) ||
          m.team2.toLowerCase().includes(term)
      );
    }

    if (this.selectedLeague !== '') {
      filtered = filtered.filter(
        (m) =>
          m.league.toLowerCase().includes(this.selectedLeague.toLowerCase())
      );
    }

    this.dashboardItems = filtered;
  }

  addToFavorites(): void {
    console.log('Favorito agregado (implementación futura)');
  }
}