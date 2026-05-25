import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-ktable',
  imports: [CommonModule, RouterModule],
  templateUrl: './ktable.html',
  styleUrl: './ktable.css',
})
export class Ktable {
signatureDishes = [
    { id: 1, name: 'Breakfast Spread', description: 'Freshly baked pastries & artisanal coffee', image: 'assets/breakfast.jpg' },
    { id: 2, name: 'Plated Salmon', description: 'Pan-seared with seasonal greens', image: 'assets/salmon.jpg' },
    { id: 3, name: 'Dry-Aged Steak', description: 'Prime cuts with truffle mash', image: 'assets/steak.jpg' },
    { id: 4, name: 'High Tea', description: 'Delicate sandwiches & sweet treats', image: 'assets/high-tea.jpg' },
    { id: 5, name: 'Signature Cocktail', description: 'Crafted by our master mixologists', image: 'assets/cocktail.jpg' }
  ];

  openReservations() {
    // Logic to open reservation modal or navigate to booking page
  }
}
