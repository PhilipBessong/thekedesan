import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Reveal } from '../directives/reveal';
@Component({
  selector: 'app-ktable',
  imports: [CommonModule, RouterModule, Reveal],
  templateUrl: './ktable.html',
  styleUrl: './ktable.css',
})
export class Ktable {
  signatureDishes = [
  {
    id: 1,
    name: 'Ribs and Chips',
    description: 'Smoked with some chillies sauce.',
    image: 'assets/ruskinchips.jpg',
  },
  {
    id: 2,
    name: 'Hot Wings and Chips',
    description: 'Chicken wings served with chips.',
    image: 'assets/wingnchip.jpg',
  },
  {
    id: 3,
    name: 'Mash, Mince Kota and Chicken Feet',
    description:
      'Mince-filled kota (quarter loaf) served with mash and chicken feet.',
    image: 'assets/mashnfeet.jpg',
  },
  {
    id: 4,
    name: 'Half Chicken and Chips',
    description: 'Half portion of chicken served with chips.',
    image: 'assets/halfnchips.jpg',
  },
  {
    id: 5,
    name: 'Ezayi Solo Meaty Meal',
    description:
      'Ribs, Russians, hot wings and half chicken wors is also a mini 1.',
    image: 'assets/solomeal.jpg',
  },
  {
    id: 6,
    name: 'Full Chicken and Chips',
    description: 'Whole chicken served with a portion of chips.',
    image: 'assets/fullnchips.jpg',
  },
  {
    id: 7,
    name: 'Hardbody Chicken',
    description:
      'Chicken prepared with a distinctive style, offering a hearty and satisfying main course option.',
    image: 'assets/hardbody.jpg',
  },
  {
    id: 8,
    name: 'Pap and Ox Liver',
    description:
      'Traditional South African staple served with tender ox liver.',
    image: 'assets/papnliver.jpg',
  },
  {
    id: 9,
    name: 'Russian and Chips',
    description: 'Classic sausage served with crispy chips.',
    image: 'assets/ribnchip.jpg',
  },
];

  openReservations() {
    // Logic to open reservation modal or navigate to booking page
  }
}

