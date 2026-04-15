import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-policyterms',
  imports: [CommonModule],
  templateUrl: './policyterms.html',
  styleUrl: './policyterms.css',
})
export class Policyterms {
  // 2. Policy & Terms Data
  policiesList = [
    {
  title: "Privacy Policy",
  content: `
    <div class="text-start">
      <p>This Privacy Policy describes how The Kedesan Guest House collects, uses, and discloses your personal information when you visit, use our services, or make a booking at <a href="https://www.thekedesan.com" class="text-white">www.thekedesan.com</a>.</p>

      <h5 class="mt-4 border-bottom border-secondary pb-1">1. Introduction</h5>
      <p>By using and accessing our Services, you agree to the collection and use of your information as described in this policy. If you do not agree, please do not use our Services.</p>

      <h5 class="mt-4 border-bottom border-secondary pb-1">2. Information We Collect</h5>
      <ul class="ps-3">
        <li><strong>2.1 Directly from You:</strong> Basic contact details (name, address, phone, email), booking information, account credentials, and communication details.</li>
        <li><strong>2.2 Usage Data:</strong> Automatically collected information via Cookies and pixels, including device info, browser type, IP address, and network connection.</li>
        <li><strong>2.3 Third Parties:</strong> Information from booking platforms and payment gateways to fulfill your reservations.</li>
      </ul>

      <h5 class="mt-4 border-bottom border-secondary pb-1">3. Security and Payment Safety</h5>
      <p>Your data security is a priority. Our payment gateways are <strong>PCI compliant</strong> and adhere to <strong>EMV certification</strong>. The PCI Data Security Standard ensures that your branded credit card information is handled securely by major schemes like Visa and MasterCard.</p>

      <h5 class="mt-4 border-bottom border-secondary pb-1">4. How We Use Your Information</h5>
      <ul class="ps-3">
        <li><strong>Providing Services:</strong> Managing bookings, processing payments, and sending notifications.</li>
        <li><strong>Marketing:</strong> With your consent, providing tailored advertisements and updates.</li>
        <li><strong>Security:</strong> Detecting and preventing fraud to ensure account safety.</li>
        <li><strong>Communication:</strong> Offering customer support and service enhancements.</li>
      </ul>

      <h5 class="mt-4 border-bottom border-secondary pb-1">5. Disclosure of Information</h5>
      <p>We may share data with vendors (IT management, payment processing), affiliates, or in connection with business transactions, always ensuring legitimate purposes and legal compliance.</p>

      <h5 class="mt-4 border-bottom border-secondary pb-1">6. Cookies & Tracking</h5>
      <p>We use Cookies to analyze site performance. You can adjust your browser settings to manage these; however, blocking cookies may affect your user experience.</p>

      <h5 class="mt-4 border-bottom border-secondary pb-1">7. Your Rights and Choices</h5>
      <p>Depending on your location, you may have the right to:</p>
      <ul class="ps-3">
        <li>Access, update, or delete your personal information.</li>
        <li>Restrict or object to specific data processing.</li>
        <li>Request a portable copy of your data.</li>
      </ul>

      <h5 class="mt-4 border-bottom border-secondary pb-1">8. Children's Data</h5>
      <p>Our services are not intended for children. We do not knowingly collect information from individuals under 18. If you believe a child has provided us with data, please contact us for deletion.</p>

      <div class="mt-4 p-3 glass-content" style="background: rgba(255,255,255,0.05); border-radius: 8px;">
        <p class="mb-1"><strong>Contact Us:</strong></p>
        <p class="small mb-0">
          The Kedesan Guest House<br>
          35 Ripley Road, Rossmore/Brixton, Johannesburg<br>
          WhatsApp: +27 69 502 2405 | Email: info@thekedesan.com
        </p>
      </div>

      <p class="mt-3 text-center small italic">Last Updated: April 2024</p>
    </div>
  `
},
    {
      title: 'Terms and Conditions',
      content: `
    <div class="text-start">
      <p>Welcome to The Kedesan Guest House. Please review the following terms and conditions carefully, as they govern your stay with us in Johannesburg.</p>

      <h5 class="mt-4 border-bottom border-secondary pb-1">1. Booking and Reservations</h5>
      <ul class="ps-3">
        <li><strong>1.1 Reservation Confirmation:</strong> All reservations must be confirmed with a valid credit card or advance payment. A confirmation email will be sent upon successful booking.</li>
        <li><strong>1.2 Check-In and Check-Out:</strong> Check-in is from 2:00 PM. Check-out is by 11:00 AM. Early arrivals or late departures are subject to availability and may incur additional charges.</li>
        <li><strong>1.3 Cancellation Policy:</strong> Full refund for cancellations made up to 48 hours before check-in. Cancellations under 48 hours or no-shows will be charged the full booking amount.</li>
      </ul>

      <h5 class="mt-4 border-bottom border-secondary pb-1">2. Payment Policy</h5>
      <ul class="ps-3">
        <li><strong>2.1 Payment Methods:</strong> We accept major credit cards, debit cards, and cash in ZAR (South African Rand).</li>
        <li><strong>2.2 Deposits:</strong> A deposit may be required at the time of booking to secure your reservation.</li>
        <li><strong>2.3 Taxes and Fees:</strong> Room rates are inclusive of VAT unless otherwise stated.</li>
      </ul>

      <h5 class="mt-4 border-bottom border-secondary pb-1">3. Guest Responsibilities</h5>
      <ul class="ps-3">
        <li><strong>3.1 Identification:</strong> Valid ID or passport must be presented upon check-in.</li>
        <li><strong>3.2 Occupancy:</strong> Maximum occupancy limits apply per room. Additional guests must be registered and may incur charges.</li>
        <li><strong>3.3 Children:</strong> Children under 12 stay free when sharing with parents; extra bedding may incur charges.</li>
        <li><strong>3.4 Damage:</strong> Guests are responsible for any damage to property; repair or replacement costs will be charged.</li>
      </ul>

      <h5 class="mt-4 border-bottom border-secondary pb-1">4. House Rules</h5>
      <ul class="ps-3">
        <li><strong>4.1 Noise:</strong> Quiet hours are observed between 10:00 PM and 7:00 AM. Disturbances may lead to eviction without refund.</li>
        <li><strong>4.2 Smoking:</strong> Non-smoking property. Smoking is only allowed in designated outdoor areas. A cleaning fee applies for violations.</li>
        <li><strong>4.3 Pets:</strong> Pets are not allowed on the premises.</li>
        <li><strong>4.4 Housekeeping:</strong> Services are provided daily between 9:00 AM and 5:00 PM.</li>
      </ul>

      <h5 class="mt-4 border-bottom border-secondary pb-1">5. Facilities and Services</h5>
      <ul class="ps-3">
        <li><strong>5.1 Internet:</strong> Complimentary Wi-Fi is provided for lawful use only.</li>
        <li><strong>5.2 Parking:</strong> Free parking is available; however, the guest house is not liable for vehicle damage or loss.</li>
        <li><strong>5.3 Security:</strong> The property is monitored by 24/7 CCTV. Guests are responsible for securing their personal belongings.</li>
      </ul>

      <h5 class="mt-4 border-bottom border-secondary pb-1">6. Special Requests</h5>
      <ul class="ps-3">
        <li><strong>6.1 Accessibility:</strong> Handicap-accessible rooms are available on request. Please notify us in advance.</li>
        <li><strong>6.2 Dining:</strong> Breakfast and dinner are available upon request for an additional fee. Please notify us of dietary needs.</li>
        <li><strong>6.3 Events:</strong> Conference hall and event facilities are available for booking via the front desk.</li>
      </ul>

      <h5 class="mt-4 border-bottom border-secondary pb-1">7. Legal</h5>
      <ul class="ps-3">
        <li><strong>7.1 Liability:</strong> Kedesan and its staff are not liable for injury, loss, or damage except as required by law.</li>
        <li><strong>7.2 Force Majeure:</strong> We are not liable for failures due to events beyond our control (natural disasters, strikes, etc.).</li>
        <li><strong>7.3 Dispute Resolution:</strong> Disputes shall be resolved in accordance with South African law.</li>
      </ul>

      <div class="mt-4 p-3 glass-content" style="background: rgba(255,255,255,0.05); border-radius: 8px;">
        <p class="mb-1"><strong>Contact Information:</strong></p>
        <p class="small mb-0">
          Phone: +27 10 016 8824 (Landline) / +27 69 502 2405 (WhatsApp)<br>
          Email: info@thekedesan.com<br>
          Address: 35 Ripley Road, Rossmore, Johannesburg, 2092
        </p>
      </div>

      <p class="mt-3 text-center small italic">By staying at The Kedesan Guest House, you agree to abide by these terms and conditions.</p>
    </div>
  `,
    },
  ];
}
