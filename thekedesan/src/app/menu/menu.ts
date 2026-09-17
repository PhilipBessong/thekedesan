import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  name: string;
  price: string | number;
  description?: string;
  category: string;
  image?: string; // Prepared for your .zoom-img class
}
@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit, AfterViewInit {
  @ViewChildren('revealElement') revealElements!: QueryList<ElementRef>;

  activeCategory: string = 'All';
  categories: string[] = [
    'All',
    'Small Bites',
    'Street Favorites',
    'Grill & Signatures',
    'Burgers & Wraps',
    "Chef's Specials",
    'Sides',
  ];

  categoryImages: { [key: string]: string } = {
    'All': 'assets/bg-all.jpg',
    'Small Bites': 'assets/bg-small-bites.jpg',
    'Street Favorites': 'assets/bg-street-favorites.jpg',
    'Grill & Signatures': 'assets/bg-grill.jpg',
    'Burgers & Wraps': 'assets/bg-burgers.jpg',
    "Chef's Specials": 'assets/bg-chefs-specials.jpg',
    Sides: 'assets/bg-sides.jpg',
  };

  // Default fallback image
activeBgImage: string = 'assets/images/bg-all.jpg';
  // Menu data extracted from menu5.pdf
  menuItems: MenuItem[] = [
    // Small Bites
    {
      name: 'BBQ Wings',
      price: 65,
      description:
        'Smoky, flame-grilled wings tossed in a rich, sticky BBQ glaze',
      category: 'Small Bites',
    },
    {
      name: 'Parmesan Zucchini Chips',
      price: 55,
      description:
        'Golden-crisp zucchini slices finished with parmesan, served with a creamy dip',
      category: 'Small Bites',
    },
    {
      name: 'Grilled Shrimp Crostini',
      price: 50,
      description:
        'Juicy grilled shrimp on toasted bread with herb-infused topping',
      category: 'Small Bites',
    },
    {
      name: 'Potato Poppers',
      price: 50,
      description:
        'Golden-brown and crispy on the outside. Served with house sauce and slaw',
      category: 'Small Bites',
    },

    // Street Favorites
    {
      name: 'Kota: Full House Legend',
      price: 50,
      description: 'Loaded quarter loaf, beef, egg, chips & in-house sauce',
      category: 'Street Favorites',
    },
    {
      name: 'Kota: Firecracker Boerie',
      price: 40,
      description:
        'Juicy boerewors drizzled in house sauce, eggs, and cheese. Served with crispy chips',
      category: 'Street Favorites',
    },
    {
      name: 'Grilled Russian Roll & Spicy Chips',
      price: 45,
      description:
        'Char-grilled Russian sausage in a toasted roll with a side of seasoned chips',
      category: 'Street Favorites',
    },

    // Grill & Signatures
    { name: 'Rump Steak (250g)', price: 227, category: 'Grill & Signatures' },
    {
      name: 'Sirloin Steak (300g)',
      price: 250,
      description:
        'Sirloin steak served over a bed of rich, velvety mashed potatoes with house chimichurri.',
      category: 'Grill & Signatures',
    },
    {
      name: 'Traditional South African',
      price: 180,
      description:
        'Flame-grilled boerewors and grilled steak, served with pap & chakalaka',
      category: 'Grill & Signatures',
    },
    {
      name: 'Morrocan Lamb Chops',
      price: 180,
      description:
        'Grilled North African spiced lamb chops topped with roasted vegetables',
      category: 'Grill & Signatures',
    },
    {
      name: 'Grilled Fish (Catch of the day)',
      price: 150,
      description:
        'Flame-grilled & loaded with sautéed mushrooms and garlic herb butter',
      category: 'Grill & Signatures',
    },

    // Burgers & Wraps
    {
      name: 'Seoul Fire Crunch Chicken',
      price: 70,
      description: 'Honey gochujang glaze, slaw & mozzarella',
      category: 'Burgers & Wraps',
    },
    {
      name: 'Shut Yo Mouth Smash',
      price: 95,
      description: 'Crispy smashed beef, cheese, pickles & signature sauce',
      category: 'Burgers & Wraps',
    },
    {
      name: 'Fire Kissed Steak Wrap',
      price: 85,
      description: 'Smoky beef, peppers & jalapeños',
      category: 'Burgers & Wraps',
    },
    {
      name: 'Zesty Chicken Wrap',
      price: 75,
      description: 'Grilled chicken, avo, greens & aioli',
      category: 'Burgers & Wraps',
    },
    {
      name: 'Signature House Burger',
      price: 150,
      description:
        'Our double-decker burger loaded with bacon, mushroom & our signature sauce',
      category: 'Burgers & Wraps',
    },

    // Chef's Specials
    {
      name: 'Pounded Yam and Egusi Soup',
      price: 150,
      description:
        'The ultimate West African soul food. Rich, nutty melon-seed soup slow-simmered with leafy greens and traditional spices. Paired with soft, smooth fufu...',
      category: "Chef's Specials",
    },
    {
      name: 'Kedesan Tower',
      price: 150,
      description:
        'Crispy fries loaded with seasoned shrimp, crispy bacon, a rich in house cream herb sauce, and fresh chives. Pure, unadulterated comfort food.',
      category: "Chef's Specials",
    },
    {
      name: 'Chapati served with Chicken Curry',
      price: 100,
      description:
        'The ultimate dip-and-devour duo. Warm, soft, house-made chapati paired with a bold, fragrant curry soup.',
      category: "Chef's Specials",
    },

    // Sides
    { name: 'Chips', price: 50, category: 'Sides' },
    { name: 'Sweet Potato', price: 40, category: 'Sides' },
    { name: 'Loaded Chili Cheese Chips', price: 50, category: 'Sides' },
    { name: 'Creamed Spinach', price: 40, category: 'Sides' },
    { name: 'Mushroom Sauce', price: 40, category: 'Sides' },
    { name: 'Coconut Fried Rice', price: 50, category: 'Sides' },
    { name: 'Chicken Salad', price: 55, category: 'Sides' },
    { name: 'Smokey Nigerian Jellof Rice', price: 50, category: 'Sides' },
  ];

  filteredItems: MenuItem[] = [];

  ngOnInit() {
    this.filterMenu('All');
  }

  ngAfterViewInit() {
    this.setupScrollObserver();
  }

  filterMenu(category: string) {
    this.activeCategory = category;
    this.activeBgImage = this.categoryImages[category] || this.categoryImages['All'];
    if (category === 'All') {
      this.filteredItems = this.menuItems;
    } else {
      this.filteredItems = this.menuItems.filter(
        (item) => item.category === category,
      );
    }
    // Re-trigger animations when filter changes
    setTimeout(() => this.setupScrollObserver(), 50);
  }

  // Uses IntersectionObserver to trigger your .active class on scroll
  setupScrollObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.1 },
    );

    this.revealElements.forEach((el) => observer.observe(el.nativeElement));
  }
}
