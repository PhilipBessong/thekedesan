import {
  Injectable,
  createComponent,
  EnvironmentInjector,
} from '@angular/core';
import { Observable, of } from 'rxjs';

// room.model.ts
export interface Room {
  id: string;
  name: string;
  capacity: number;
  bedNum: number;
  bathNum: number;
  price: number;
  amenities: string[];
  images: string[];
  description?: string;
  status?: string; // optional: available, occupied, maintenance
  features?: RoomFeatures;
  roomtype?: string; // optional: single, double, suite, apartment
}
export interface amenities {
  id: string;
  name: string;
  subname: string; // optional: for categorization (e.g., 'sleeping', 'kitchen', etc.)
  description?: string;
  image?: string; // URL or icon class for UI representation
}
export interface RoomFeatures {
  sleeping: string[]; // Beds, AC, heating, linens
  kitchen: string[]; // Appliances, dining, coffee
  bathroom: string[]; // Shower, bath, toiletries, laundry
  tech: string[]; // WiFi, TV, power backup, workspace
  outdoor: string[]; // BBQ, views, garden, parking
  safety: string[]; // Security, alarms, services, rules
}

// booking.model.ts
export interface Booking {
  id?: string; // uuid
  room_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  adult_guests: number;
  child_guests: number;
  total_guests: number;
  start_date: string; // ISO date string
  end_date: string; // ISO date string
  total_price: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'checked_in' | 'checked_out';
  source: 'website' | 'phone' | 'OTA';
  created_at: Date;
}

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private injector: EnvironmentInjector) {}

  private rooms: Room[] = [
    {
      id: '1',
      name: 'Room Dezy',
      capacity: 2,
      bedNum: 1,
      bathNum: 1,
      price: 1200,
      roomtype: 'nocook',
      amenities: [
        'Garden view',
        'Air conditioning',
        'Free Wi-Fi',
        'Flat-screen TV',
        'Free toiletries',
        'En-suite bathroom',
        'Tea/coffee accessories',
        'Kitchenette with microwave',
        'Daily surprise',
      ],
      images: [
        '/assets/dezy1.jpg',
        '/assets/dezy2.jpg',
        '/assets/dezy3.jpg',
        '/assets/dezy4.jpg',
      ],
      description:
        'This is an exclusive, spacious, serene room; with a queen, comfortable bed for total occupancy of two. You have a writing desk, ergonomic chair, and high speed internet to support your business activities, or stay in contact with family and friends while on the move. You can follow current affairs, and business news, or just relax with the DSTV Compact bouquet. For your exclusive use, there are heat-and-eat facilities - fridge, microwave, electric kettle; with mugs, cutlery, and plates to go with. There is complimentary tea and coffee, and  prepared water.',
      features: {
        sleeping: [
          'One queen bed with cotton linens',
          'Split-type ductless Air Conditioning',
          'Electric blankets for winter',
          'Wardrobe/closet with hangers',
          'Garden views',
        ],
        kitchen: [
          'Dishes & cutlery for two',
          'Hisense fridge & Microwave',
          'Electric kettle',
          'Wine & Drinking glasses',
        ],
        bathroom: [
          'Private en-suite bathroom',
          'Walk-in shower',
          'Hairdryer',
          'Shower gel & towels provided',
        ],
        tech: [
          'Solar Power (WiFi/TV works during load shedding)',
          'Free high-speed WiFi',
          'Dedicated workspace/desk',
          '36-inch HDTV with DSTV/Satellite',
        ],
        outdoor: [
          'Ground floor with private entrance',
          'BBQ (Braai) stand on request',
          'Free parking on premises',
          'Outdoor seating furniture',
        ],
        safety: [
          'Exterior security cameras',
          'Smoke alarm & fire extinguisher',
          'Window guards',
          'Non-smoking property',
          'Not suitable for children',
        ],
      },
    },
    {
      id: '2',
      name: 'Fiesta Room',
      capacity: 2,
      bedNum: 1,
      bathNum: 1,
      price: 900,
      roomtype: 'nocook',
      amenities: [
        'Private garden entrance',
        'Air conditioning',
        'Tea/coffee accessories',
        'Free Wi-Fi',
        'Flat-screen TV',
        'En-suite bathroom',
        'Queen Bed',
        'Free toiletries',
        'Daily surprise',
      ],
      images: [
        '/assets/fiesta1.jpg',
        '/assets/fiesta2.jpg',
        '/assets/fiesta3.jpg',
        '/assets/fiesta4.jpg',
      ],
      description:
        'This is an exclusive, spacious, serene room; with a queen, comfortable bed for total occupancy of two (slightly larger than its sister unit). You have a writing desk, ergonomic chair, and high speed internet to support your business activities, or stay in contact with family and friends while on the move. You can follow current affairs, and business news, or just relax with the DSTV Compact bouquet. For your exclusive use, there are heat-and-eat facilities - fridge, microwave, electric kettle; with mugs, cutlery, and plates to go with. There is complimentary tea and coffee, and  prepared water.',
      features: {
        sleeping: [
          'Queen-size bed with quality linens',
          'Split-type ductless AC',
          'Electric blankets & portable fans',
          'Wardrobe/closet',
          'Tiled/marble flooring',
        ],
        kitchen: [
          'Dishes & cutlery for two',
          'Microwave & fridge',
          'Electric kettle & Full tableware',
          'Wine & Drinking glasses',
        ],
        bathroom: [
          'Private en-suite bathroom',
          'Walk-in shower',
          'Hairdryer',
          'Shower gel & towels provided',
        ],
        tech: [
          'Free high-speed WiFi',
          'Dedicated workspace/desk',
          'Flat-screen HDTV with DSTV',
          'Socket near the bed',
        ],
        outdoor: [
          'Garden Views',
          'Private entrance',
          'Outdoor seating furniture',
          'Free parking on premises',
        ],
        safety: [
          'Smoke alarm & fire extinguisher',
          'Exterior security cameras',
          'Host greets guests personally',
          'Strictly non-smoking',
        ],
      },
    },
    {
      id: '3',
      name: 'Kedesan room',
      capacity: 2, // Note: Text says 2 adults + baby, mapped to capacity 2 usually
      bedNum: 1,
      bathNum: 1,
      price: 1200,
      roomtype: 'cook',
      amenities: [
        'Garden Access',
        'Air conditioning',
        'Free Wi-Fi',
        'Flat-screen TV',
        'King Size Bed',
        'Tea/coffee accessories',
        'En-suite bathroom',
        'Free toiletries',
        'Daily surprise',
      ],
      images: [
        '/assets/kroom1.jpg',
        '/assets/kroom2.jpg',
        '/assets/kroom3.jpg',
        '/assets/fiesta4.jpg',
      ],
      description:
        'This air-conditioned, spacious one-bed room apartment consists of a queen bed, an exercise bike, and one ensuite bathroom with a shower. The well-fitted kitchenette comprises a stovetop, a refrigerator, kitchenware and a microwave. There is a washing machine, flat-screen TV with satellite channels, patio, garden views; high speed internet connection and  a dedicated writing desk. There is a barbecue stand on request.',
      features: {
        sleeping: [
          'Queen-size bed with cotton linens',
          'Air conditioning & portable fans',
          'Electric blankets for colder nights',
          'Wardrobe & clothes rack',
        ],
        kitchen: [
          'Well-fitted kitchenette (Stovetop, Fridge, Microwave)',
          'Toaster, Blender & Electric Kettle',
          'Pots, pans & cooking utensils',
          'Dining area with dishes & silverware',
        ],
        bathroom: [
          'En-suite with shower',
          'In-unit Washing Machine',
          'Hairdryer',
          'Iron & ironing board',
        ],
        tech: [
          'Solar panel system (Backup power)',
          'Fast property-wide WiFi',
          'Dedicated workspace/desk',
          'Flat-screen TV with DSTV',
          'Stationary fitness bike',
          'Board games & Books',
        ],
        outdoor: [
          'Private entrance & patio',
          'Backyard/garden access',
          'BBQ (Braai) stand on request',
          'Outdoor seating furniture',
        ],
        safety: [
          'Cot & High chair available',
          'Baby bath & window guards',
          'Smoke alarm & fire extinguisher',
          'Exterior security cameras',
        ],
      },
    },
    {
      id: '4',
      name: 'The Sima',
      capacity: 8,
      bedNum: 5,
      bathNum: 2.5, // 2.5 baths rounded up or kept as 3
      price: 950,
      roomtype: 'cook',
      amenities: [
        'Deck with outdoor seating',
        'Air conditioning',
        'Free Wi-Fi',
        'Flat-screen TV',
        'Kitchenette',
        'Tea/coffee accessories',
        'En-suite bathroom',
        'Large private bath',
        'Free toiletries',
      ],
      images: [
        '/assets/sima1.jpg',
        '/assets/sima2.jpg',
        '/assets/sima3.jpg',
        '/assets/sima4.jpg',
      ],
      description:
        'The Plum is fully furnished and suitable for families and groups of up to 8 individuals sharing. With a fully equipped kitchen and barbecue facilities, guests are able to prepare their own meals, with the option of enjoying their meals in the dining area or outdoors. The host provides complimentary tea and coffee; and 5L of prepared portable water daily to guests of two or less, and 10L to groups of three or more. Children of three years and below will enjoy a cot to sleep on, and a high chair to eat and bond with parents. The copious wardrobe space allows for the storage of belongings without things getting in the way. The lounge, with sofas and satellite television, allows guests to keep abreast with national and international current affairs and business news, or just to relax with any of the drama or movie channels. Guests traveling for business have a dedicated work area with an ergonomic chair. High speed internet is available in all areas of the property.',
      features: {
        sleeping: [
          'Bedroom 1: Queen bed + Cot',
          'Bedroom 2: Double bed + 3/4 bed',
          'Bedroom 3: Double bed + 3/4 bed',
          'Electric blankets & cotton linens',
        ],
        kitchen: [
          'Full Kitchen (Gas Stove, Dishwasher)',
          'Large Refrigerator & Microwave',
          'Toaster, Blender & Electric Kettle',
          'Full set of cookware & baking sheets',
          'Dining area with children’s dinnerware',
        ],
        bathroom: [
          '2.5 Bathrooms (Master Ensuite Bathtub & Shower)',
          'Shared Shower',
          'Hairdryer & Shower gel',
          'Cleaning products provided',
        ],
        tech: [
          'Solar Power (No load shedding)',
          'Fast Free WiFi (90 Mbps)',
          '55-inch HDTV with DSTV',
          'Workspace with ergonomic chair',
          'Board games & Books',
        ],
        outdoor: [
          'Fully fenced private backyard',
          'BBQ (Braai) stand on request',
          'Outdoor furniture & dining area',
          'Free private parking',
        ],
        safety: [
          'Family friendly: High chair, Baby bath',
          'Smoke & Carbon monoxide alarms',
          'Ground floor',
          'Luggage drop-off allowed',
        ],
      },
    },
    {
      id: '5',
      name: 'The Eliz Room',
      capacity: 2,
      bedNum: 1,
      bathNum: 1,
      price: 860,
      roomtype: 'nocook',
      amenities: [
        'Patio with garden view',
        'Queen Bed',
        'Air conditioning',
        'Free Wi-Fi',
        'Flat-screen TV',
        'Kitchenette',
        'Tea/coffee accessories',
        'En-suite bathroom',
        'Free toiletries',
      ],
      images: [
        '/assets/eliz1.jpg',
        '/assets/eliz2.jpg',
        '/assets/eliz3.jpg',
        '/assets/fiesta4.jpg',
      ],
      description:
        'Tailored specifically for the remote professional, this suite features a specialized focus on productivity. It boasts a premium ergonomic chair and a dual-monitor-ready desk setup alongside the comfort of a king-sized bed. The room is positioned in the quietest corner of the property to ensure undisturbed video calls and deep focus sessions.',
      features: {
        sleeping: [
          'King-size orthopedic bed',
          'Blackout curtains for day-sleepers',
          'Soundproofed windows',
          'Luxury Egyptian cotton linens',
        ],
        kitchen: [
          'Nespresso coffee machine',
          'Mini-fridge with stocked refreshments',
          'Microwave & Electric kettle',
          'Selection of premium herbal teas',
        ],
        bathroom: [
          'Rainfall shower head',
          'Heated towel rails',
          'Organic toiletries',
          'Magnifying makeup/shaving mirror',
        ],
        tech: [
          'Dedicated 100Mbps Fiber line',
          'Multiple universal plug points & USB ports',
          '42-inch 4K Smart TV with casting',
          'Uninterrupted solar backup for all devices',
        ],
        outdoor: [
          'Private balcony with sunset views',
          'Dedicated outdoor smoking area',
          'Direct access to the perennial gardens',
        ],
        safety: [
          'Digital laptop safe',
          'Smart lock entry',
          'Fire extinguisher & smoke alarm',
        ],
      },
    },
    {
      id: '6',
      name: 'Georges Room',
      capacity: 2,
      bedNum: 1,
      bathNum: 1,
      price: 950,
      roomtype: 'cook',
      amenities: [
        'Private Garden Access',
        'Air conditioning',
        'Free Wi-Fi',
        'Flat-screen TV',
        'Tea/coffee accessories',
        'En-suite bathroom',
        'Free toiletries',
        'Daily surprise',
      ],
      images: [
        '/assets/groom1.jpg',
        '/assets/groom2.jpg',
        '/assets/fiesta4.jpg',
        '/assets/groom3.jpg',
      ],
      description:
        'A romantic getaway cottage surrounded by the scent of blooming hibiscus. This unit offers a private, gated patio perfect for morning yoga or evening sundowners. The interior is decorated in soft pastels and natural wood, creating a warm, earthy atmosphere for couples seeking a peaceful retreat.',
      features: {
        sleeping: [
          'Queen canopy bed',
          'Mood lighting system',
          'Plush seating area with garden views',
          'Electric blankets for winter',
        ],
        kitchen: [
          'Two-plate induction stove',
          'Compact oven & Toaster',
          'Vintage-style refrigerator',
          'Breakfast bar with two stools',
        ],
        bathroom: [
          'Vintage clawfoot bathtub',
          'Separate walk-in shower',
          'Bath salts and essential oils provided',
        ],
        tech: [
          'Bluetooth sound system',
          'Smart TV with Netflix & DSTV',
          'Solar power backup',
        ],
        outdoor: [
          'Private fenced patio',
          'Personal herb garden for cooking',
          'Direct path to the main garden fountain',
        ],
        safety: [
          'Panic button linked to security',
          'Window guards',
          'Exterior lighting',
        ],
      },
    },
    {
      id: '7',
      name: 'Theam Room',
      capacity: 1,
      bedNum: 1,
      bathNum: 1,
      price: 860,
      roomtype: 'nocook',
      amenities: [
        'Deck with outdoor seating',
        '2 Twin Beds',
        'Air conditioning',
        'Free Wi-Fi',
        'Flat-screen TV',
        'Kitchenette with microwave',
        'Tea/coffee accessories',
        'En-suite bathroom',
        'Free toiletries',
      ],
      images: [
        '/assets/theam1.jpg',
        '/assets/theam2.jpg',
        '/assets/theam3.jpg',
        '/assets/theam4.jpg',
        '/assets/fiesta4.jpg',
      ],
      description:
        'A cozy, safe, and affordable option for the single traveler. While compact, the Solo Sanctuary makes clever use of space with built-in storage and a massive window that floods the room with natural Johannesburg sunlight. Perfect for overnight layovers or short business trips.',
      features: {
        sleeping: [
          'Comfortable 3/4 bed',
          'Wall-mounted reading lights',
          'Built-in under-bed storage',
        ],
        kitchen: ['Small bar fridge', 'Kettle and coffee station', 'Microwave'],
        bathroom: [
          'Compact ensuite shower',
          'High-pressure water system',
          'Fresh towels daily',
        ],
        tech: [
          'Fast WiFi (unlimited)',
          'Bedside charging station',
          'Wall-mounted TV',
        ],
        outdoor: ['Access to communal lounge and garden', 'Shared BBQ area'],
        safety: ['Interior deadbolt', 'Well-lit entrance', '24/7 on-call host'],
      },
    },
    {
      id: '8',
      name: 'Patrick Room',
      capacity: 3,
      bedNum: 2,
      bathNum: 2,
      price: 900,
      roomtype: 'cook',
      amenities: [
        'Air conditioning',
        'Free Wi-Fi',
        'Flat-screen TV',
        'Tea/coffee accessories',
        'En-suite bathroom',
        'Free toiletries',
        'Daily surprise',
      ],
      images: [
        '/assets/proom1.jpg',
        '/assets/fiesta4.jpg',
        '/assets/proom2.jpg',
        '/assets/proom3.jpg',
      ],
      description:
        'Our most architectural unit, the Executive Loft features high ceilings and a mezzanine sleeping area. The downstairs living space is perfect for hosting small meetings or enjoying a gourmet meal. It offers panoramic views of the Pretoria skyline from the upper floor.',
      features: {
        sleeping: [
          'Mezzanine: King-size bed',
          'Downstairs: Luxury sleeper sofa',
          'Air conditioning on both levels',
        ],
        kitchen: [
          'Full-size gas stove and oven',
          'Dishwasher and Washing machine',
          'Double-door fridge/freezer',
          'Island breakfast nook',
        ],
        bathroom: [
          'Two full bathrooms',
          'Master bath with bidet and double vanity',
          'Guest shower downstairs',
        ],
        tech: [
          'Surround sound system',
          '65-inch 4K TV',
          '90Mbps Fiber line',
          'Full solar inverter system',
        ],
        outdoor: [
          'Large wrap-around balcony',
          'Outdoor dining set',
          'Gas braai (barbecue) included',
        ],
        safety: [
          'CCTV monitor for exterior views',
          'Safe for valuables',
          'Smoke and CO2 detectors',
        ],
      },
    },
  ];

  private amenitiesList: amenities[] = [
    {
      id: '1',
      name: 'Breakfast Service',
      subname: 'Experience Comfort and Convenience',
      description: 'At The Kedesan Guest House, we believe that a good day starts with a great breakfast. Our breakfast service offers a variety of delicious options to suit every palate, ensuring you have the energy you need for a productive day. Enjoy a delicious breakfast without leaving the guest house.',
      image: '/assets/breakfast.jpg',
    },
    {
      id: '2',
      name: 'Luxury Shuttle Services',
      subname: 'Experience Comfort and Convenience',
      description: 'At The Kedesan Guest House, we prioritize your comfort and convenience. Our luxury shuttle service ensures a seamless and relaxing journey to and from the airport. Whether you are arriving or departing, our professional drivers and well-maintained vehicles are here to make your travel experience exceptional.',
      image: '/assets/drive.jpg',
    },
    {
      id: '3',
      name: 'Laundry Services',
      subname: 'Convenient and Reliable',
      description: 'At The Kedesan Guest House, we offer convenient and reliable laundry services to ensure that your clothes are always fresh and clean during your stay. Whether you need a quick wash or full-service care, our team is here to assist you.',
      image: '/assets/laundry.jpg',
    },
    {
      id: '4',
      name: 'Handicap Accessible Services',
      subname: 'Ensuring Comfort and Convenience for All',
      description: 'Discover the Accessible Facilities at The Kedesan Huis, where we prioritize comfort and inclusivity for all our guests. At The Kedesan Huis, our accessible features are thoughtfully designed to ensure a seamless and enjoyable experience for everyone. Whether you have specific mobility needs or are seeking a more comfortable stay, our accessible facilities are here to meet your needs.',
      image: '/assets/handicap.jpg',
    },
    {
      id: '5',
      name: 'Shopping Services',
      subname: 'Convenient and Hassle-Free',
      description: 'At The Kedesan Guest House, we aim to make your stay as comfortable and convenient as possible. Our grocery shopping service is designed to save you time and effort, ensuring you have all the essentials you need without having to leave the comfort of the guest house.',
      image: '/assets/shopping.jpg',
    },
    {
      id: '6',
      name: 'Smoking Area',
      subname: 'A Comfortable Space for Smokers',
      description: 'At The Kedesan Guest House, we understand the needs of all our guests. Our designated outside smoking area offers a comfortable and peaceful space for smokers to relax and unwind.',
      image: '/assets/smoking.jpg',
    }
  ];

  getRooms(): Observable<Room[]> {
    return of(this.rooms);

  }
  getRoomById(id: string): Room | undefined {
    return this.rooms.find((room) => room.id === id);
  }
  getAmenities(): Observable<amenities[]> {
    return of(this.amenitiesList);
  }
  getAmenityById(id: string): amenities | undefined {
    return this.amenitiesList.find((amenity) => amenity.id === id);
  }
}
