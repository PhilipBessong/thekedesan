import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-app-virtual-tour',
  imports: [CommonModule, RouterModule],
  templateUrl: './app-virtual-tour.html',
  styleUrl: './app-virtual-tour.css',
})
export class AppVirtualTour implements OnInit {
  // Replace 'YOUR_MODEL_ID_HERE' with your actual Matterport model ID
  private matterportUrl: string = 'https://my.matterport.com/show/?m=YOUR_MODEL_ID_HERE&play=1';

  // SafeResourceUrl is required by Angular to trust the external iframe source
  safeTourUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Sanitize the URL so Angular allows it to load in the iframe
    this.safeTourUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.matterportUrl);
  }
}
