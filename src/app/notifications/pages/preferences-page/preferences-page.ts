import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-preferences-page',
  imports: [MatSlideToggleModule, FormsModule],
  templateUrl: './preferences-page.html',
  styleUrl: './preferences-page.css',
})
export class PreferencesPage {

  oneChecked = true;
  twoChecked = true;

}
