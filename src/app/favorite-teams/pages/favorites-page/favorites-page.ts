import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from '@angular/material/divider';
import { Teams } from '../../services/teams';

@Component({
  selector: 'app-favorites-page',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './favorites-page.html',
  styleUrl: './favorites-page.css',
})
export class FavoritesPage implements OnInit{

  teamsItems: any[] = [];
  favoriteTeams: any[] = [];

  constructor(private teamService: Teams) {}

  ngOnInit(): void {
    this.loadAll();
  }

  /** Cargar equipos y favoritos */
  loadAll() {
    this.getTeams();
    this.getFavorites();
  }

  /** Obtener todos los equipos */
  getTeams(): void {
    this.teamService.getAll().subscribe((res: any) => {
      this.teamsItems = res.data ?? res;
      console.log("Equipos disponibles:", this.teamsItems);
    });
  }

  /** Obtener favoritos del usuario */
  getFavorites(): void {
    this.teamService.getFavorites().subscribe((res: any) => {
      this.favoriteTeams = res.data;
      console.log("Equipos favoritos:", this.favoriteTeams);
    });
  }

  /** Equipos disponibles que no son favoritos */
  get availableTeams() {
    return this.teamsItems.filter(
      t => !this.favoriteTeams.some(f => f.teamId === t.id)
    );
  }

  /** AGREGAR favorito */
  addToFavorites(team: any) {
    this.teamService.addFavorite(team.id).subscribe(() => {
      console.log("Favorito agregado");
      this.getFavorites();
    });
  }

  /** REMOVER favorito */
  removeFromFavorites(item: any) {
    this.teamService.removeFavorite(item.teamId).subscribe(() => {
      console.log("Favorito eliminado");
      this.getFavorites();
    });
  }

}
