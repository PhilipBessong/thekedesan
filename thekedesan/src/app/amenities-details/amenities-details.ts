import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { amenities, RoomService } from '../service/room-service';
@Component({
  selector: 'app-amenities-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './amenities-details.html',
  styleUrl: './amenities-details.css',
})
export class AmenitiesDetails implements OnInit {
  amenity: amenities | undefined;

    constructor(
      private route: ActivatedRoute,
      private roomService: RoomService
    ) {}

    ngOnInit() {
      // Get the ID from the URL
      const amenitiesId = this.route.snapshot.paramMap.get('id');
      if (amenitiesId) {
        // In a real app, this might be an Observable from an API
        // For now, we fetch from the service local array
        this.amenity = this.roomService.getAmenityById(amenitiesId);
      }
    }

}
