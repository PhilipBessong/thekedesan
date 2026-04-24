import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Room, RoomService } from '../service/room-service';

@Component({
  selector: 'app-room-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './room-details.html',
  styleUrl: './room-details.css',
})
export class RoomDetails implements OnInit {
  room: Room | undefined;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) {}

  ngOnInit() {
    // Get the ID from the URL
    const roomId = this.route.snapshot.paramMap.get('id');
    if (roomId) {
      // In a real app, this might be an Observable from an API
      // For now, we fetch from the service local array
      this.room = this.roomService.getRoomById(roomId);
    }
  }

}
