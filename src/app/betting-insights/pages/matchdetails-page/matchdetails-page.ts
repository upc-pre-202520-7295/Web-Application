import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matchdetails-page',
  imports: [MatIconModule, CommonModule],
  templateUrl: './matchdetails-page.html',
  styleUrl: './matchdetails-page.css',
})
export class MatchdetailsPage implements OnInit {

   selectedMatch: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = history.state['match'];
    this.selectedMatch = data ?? null;
  }
}
