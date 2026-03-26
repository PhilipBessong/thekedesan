import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {Room, RoomService } from '../service/room-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit , AfterViewInit {
  rooms: Room[] = [];

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
