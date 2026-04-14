import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { amenities, RoomService } from '../service/room-service';
@Component({
  selector: 'app-amenities',
  imports: [CommonModule, RouterModule],
  templateUrl: './amenities.html',
  styleUrl: './amenities.css',
})
export class Amenities implements OnInit , AfterViewInit {

amenitiesList: amenities[] = [];
  constructor(
    private roomService: RoomService,
    @Inject(PLATFORM_ID) private platformId: Object // Needed to avoid errors if using SSR
  ) {}

  ngOnInit() {
    this.roomService.getAmenities().subscribe((amenities) => {
      this.amenitiesList = amenities;

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
