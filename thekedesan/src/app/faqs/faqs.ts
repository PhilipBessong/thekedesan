import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-faqs',
  imports: [CommonModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css',
})
export class Faqs {
faqsList = [
  {
    question: "Is there parking available at Kedesan Guest House?",
    answer: "Yes, we offer free secure parking for all our guests."
  },
  {
    question: "What amenities are included at Kedesan Guest House?",
    answer: "Guests at Kedesan Guest House enjoy a range of amenities including: <br>• Complimentary high-speed Wi-Fi <br>• Daily housekeeping <br>• Continental breakfast <br>• Private ensuite bathrooms <br>• Tea/coffee making facilities <br>• Access to the garden and outdoor seating area <br>• Secure parking"
  },
  {
    question: "What is Kedesan Guest House’s check-in and check-out time?",
    answer: "<b>Check-in:</b> From 2:00 PM <br><b>Check-out:</b> By 11:00 AM <br><br>If you need an early check-in or late check-out, please contact us in advance. We will do our best to accommodate your request, subject to availability."
  },
  {
    question: "What is Kedesan Guest House’s cancellation policy?",
    answer: "Cancellations must be made 48 hours before the scheduled check-in date to avoid a penalty. For more details, please refer to your booking confirmation or contact our reservations desk at +27 69 502 2405."
  },
  {
    question: "Does Kedesan Guest House have a smoking policy?",
    answer: "Our guest house is a non-smoking property. Smoking is prohibited in all rooms and common areas. A cleaning fee of R500 will be charged for any violations."
  },
  {
    question: "Are pets allowed at Kedesan Guest House?",
    answer: "We do not allow pets at Kedesan Guest House."
  },
  {
    question: "What type of rooms are available at Kedesan Guest House?",
    answer: "<b>Standard Rooms:</b> Comfortable rooms with basic amenities, perfect for short stays.<br><b>Deluxe Rooms:</b> Spacious rooms with additional features such as a larger bed and sitting area.<br><b>Family Rooms:</b> Accommodate larger groups with extra beds or cribs available.<br><b>Executive Suites:</b> Luxurious suites with separate living areas."
  },
  {
    question: "Can I request a specific room during my stay?",
    answer: "Yes, you may request a specific room when booking. We will do our best to accommodate your request, but please note that room allocations are subject to availability."
  },
  {
    question: "Does Kedesan Guest House offer transportation services?",
    answer: "We can arrange airport transfers and local transportation upon request. Please contact us prior to your arrival to make arrangements."
  },
  {
    question: "Is Kedesan Guest House suitable for families?",
    answer: "Yes, Kedesan Guest House welcomes families. We offer family-friendly rooms and can provide extra beds or cribs upon request."
  },
  {
    question: "How does Kedesan Guest House handle special dietary needs?",
    answer: "Please inform us of any dietary requirements or food allergies prior to your arrival, and we will do our best to accommodate your needs."
  },
  {
    question: "What are the cleaning procedures at Kedesan Guest House?",
    answer: "Our housekeeping team cleans rooms daily between 9:00 AM and 5:00 PM. High-touch areas are sanitized thoroughly. Additional linen and amenities are available upon request."
  }
];
}
