import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-favorites-page',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './favorites-page.html',
  styleUrl: './favorites-page.css',
})
export class FavoritesPage {

  favoriteTeams = [
    { name: 'Real Madrid', teamLeague: 'Champions League' },
    { name: 'Barcelona', teamLeague: 'Champions League' },
    { name: 'Atlético de Madrid', teamLeague: 'Champions League' },
    { name: 'Athletic Club', teamLeague: 'Champions League' },
    { name: 'Villarreal', teamLeague: 'Champions League' },
    { name: 'Paris Saint-Germain', teamLeague: 'Champions League' },
    { name: 'Marseille', teamLeague: 'Champions League' },
    { name: 'Monaco', teamLeague: 'Champions League' },
  ]

  teamsItems = [
    { name: 'Real Madrid', teamLeague: 'Champions League' },
    { name: 'Barcelona', teamLeague: 'Champions League' },
    { name: 'Atlético de Madrid', teamLeague: 'Champions League' },
    { name: 'Athletic Club', teamLeague: 'Champions League' },
    { name: 'Villarreal', teamLeague: 'Champions League' },
    { name: 'Paris Saint-Germain', teamLeague: 'Champions League' },
    { name: 'Marseille', teamLeague: 'Champions League' },
    { name: 'Monaco', teamLeague: 'Champions League' },
    { name: 'Bayern München', teamLeague: 'Champions League' },
    { name: 'Bayer Leverkusen', teamLeague: 'Champions League' },
    { name: 'Eintracht Frankfurt', teamLeague: 'Champions League' },
    { name: 'Borussia Dortmund', teamLeague: 'Champions League' },
    { name: 'Liverpool', teamLeague: 'Champions League' },
    { name: 'Arsenal', teamLeague: 'Champions League' },
    { name: 'Manchester City', teamLeague: 'Champions League' },
    { name: 'Chelsea', teamLeague: 'Champions League' },
    { name: 'Napoli', teamLeague: 'Champions League' },
    { name: 'Inter', teamLeague: 'Champions League' },
    { name: 'Atalanta', teamLeague: 'Champions League' },
    { name: 'Juventus', teamLeague: 'Champions League' },
    { name: 'PSV Eindhoven', teamLeague: 'Champions League' },
    { name: 'Ajax', teamLeague: 'Champions League' },
    { name: 'Sporting CP', teamLeague: 'Champions League' },
    { name: 'Galatasaray', teamLeague: 'Champions League' },
    { name: 'Slavia Praha', teamLeague: 'Champions League' }
  ]

  // Get available teams
  get availableTeams() {
    return this.teamsItems.filter(
      team => !this.favoriteTeams.some(fav => fav.name === team.name)
    )
  }

  // Add favorite teams
  addToFavorites(team: { name: string; teamLeague: string }) {
    if (!this.favoriteTeams.some(fav => fav.name === team.name)) {
      this.favoriteTeams.push(team);
    }
    console.log(this.availableTeams)
  }

  // Delete from favorites
  removeFromFavorites(team: { name: string; teamLeague: string }) {
    this.favoriteTeams = this.favoriteTeams.filter(fav => fav.name !== team.name)
  }

}
