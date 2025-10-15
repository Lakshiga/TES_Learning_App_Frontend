import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule,RouterOutlet],
  templateUrl: './admin-navbar.html',
})
export class AdminNavbar {
  isCurriculumOpen = false;
  isLanguageOpen = false;
  selectedLanguage = 'English';

  toggleCurriculum() {
    this.isCurriculumOpen = !this.isCurriculumOpen;
  }

  toggleLanguage() {
    this.isLanguageOpen = !this.isLanguageOpen;
  }

  setLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.isLanguageOpen = false;
  }
}
