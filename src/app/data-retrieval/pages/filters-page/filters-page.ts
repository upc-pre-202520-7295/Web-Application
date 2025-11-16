import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters-page',
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './filters-page.html',
  styleUrl: './filters-page.css',
})
export class FiltersPage {

  constructor(private router: Router) {}

  dashboardItems = [
    { "id": 1, league: 'Champions', team1: 'Real Madrid', team2: 'Bayern München', dateTime: '2025-11-23', hour: '18:30' },
    { "id": 2, league: 'Champions', team1: 'Manchester City', team2: 'Inter', dateTime: '2025-12-04', hour: '21:00' },
    { "id": 3, league: 'Champions', team1: 'Arsenal', team2: 'Paris Saint-Germain', dateTime: '2026-01-15', hour: '20:45' },
    { "id": 4, league: 'Champions', team1: 'Barcelona', team2: 'Liverpool', dateTime: '2025-10-28', hour: '19:00' },
    { "id": 5, league: 'Champions', team1: 'Juventus', team2: 'Atletico de Madrid', dateTime: '2026-02-10', hour: '21:00' }
  ]

  // Card selection
  gotToDetails(id: number): void {
    this.router.navigate(['/match', id])
  }

  // Filter variables
  searchTerm: string = '';
  selectedLeague: string = '';
  selectedCondition: string = '';

  // Filtered list
  filteredItems: any[] = [];  

  // Filtering logic
  applyFilters(): void {
    const search =  this.searchTerm.toLowerCase();

    if (!search && !this.selectedLeague && !this.selectedCondition) {
      this.filteredItems = [];
      return;
    }

    this.filteredItems = this.dashboardItems.filter(item => {
      const matchesSearch =
        !search || 
        item.team1.toLowerCase().includes(search) ||
        item.team2.toLowerCase().includes(search);

      const matchesLeague =
        !this.selectedLeague || item.league === this.selectedLeague;

      const matchesCondition = !this.selectedCondition || true;

      return matchesSearch && matchesLeague && matchesCondition;
    })

    console.log(this.filteredItems)
  }

  // Clear filters
  clearFilters(): void {
    this.searchTerm = '';
    this.selectedLeague = '';
    this.selectedCondition = '';
    this.filteredItems = [];
  }

}
