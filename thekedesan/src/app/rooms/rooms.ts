import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {Room,amenities, RoomService } from '../service/room-service';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms  implements OnInit , AfterViewInit {
  rooms: Room[] = [];
amenitiesList: amenities[] = [];
  constructor(
    private roomService: RoomService,
    @Inject(PLATFORM_ID) private platformId: Object // Needed to avoid errors if using SSR
  ) {}

  ngOnInit() {
    this.roomService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;

      // If the cards still don't show, trigger the observer here too
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.initObserver(), 200);
      }
    });
    this.roomService.getAmenities().subscribe((amenities) => {
      this.amenitiesList = amenities;
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initObserver();
    }
  }

  initObserver() {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // This scans for EVERYTHING with .reveal, including the new cards
    document.querySelectorAll('.reveal, .reveal-left').forEach((el) => {
      observer.observe(el);
    });
  }
}
