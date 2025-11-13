import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isScrolled = false;
  isSearchActive = false;
  isMobileMenuOpen = false;
  searchQuery = '';

  menuItems = [
    { label: 'Início', active: true },
    { label: 'Filmes', active: false },
    { label: 'Séries', active: false },
    { label: 'Em Destaque', active: false },
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleSearchActive() {
    this.isSearchActive = !this.isSearchActive;
    if (!this.isSearchActive) {
      this.searchQuery = '';
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  selectMenuItem(index: number) {
    this.menuItems.forEach((item, i) => {
      item.active = i === index;
    });
    this.isMobileMenuOpen = false;
  }

  onSearch() {
    console.log('Buscando por:', this.searchQuery);
    // implementar lógica!
  }
}
