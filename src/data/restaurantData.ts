import { MenuItem, Review, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'VELORA',
  tagline: 'Taste. Crafted. Remembered.',
  subtitle: 'Experience beautifully crafted dishes, fresh ingredients and unforgettable flavours at VELORA.',
  phone: '+1 (555) 782-9421',
  phoneDisplay: '+1 (555) 782-9421',
  email: 'concierge@velora-dining.com',
  address: '42 Heritage Boulevard, Indiranagar, Bengaluru / Mayfair District',
  addressShort: '42 Heritage Boulevard, Mayfair District',
  hours: {
    weekdays: 'Monday – Thursday: 12:00 PM – 11:00 PM',
    weekends: 'Friday – Sunday: 12:00 PM – Midnight',
    lunch: '12:00 PM – 3:30 PM',
    dinner: '7:00 PM – 11:00 PM'
  },
  established: 2021,
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    twitter: 'https://x.com',
    tripadvisor: 'https://tripadvisor.com'
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: 'starter-1',
    name: 'Paneer Tikka',
    category: 'Starters',
    description: 'Char-grilled cubes of artisanal cottage cheese marinated in hung curd, Kashmiri deggi mirch, and hand-ground carom seeds.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=900&q=80',
    isVeg: true,
    tag: "Chef's Signature",
    spiciness: 2,
    prepTime: '15 mins',
    calories: '340 kcal'
  },
  {
    id: 'starter-2',
    name: 'Crispy Corn',
    category: 'Starters',
    description: 'Golden sweet corn kernels tossed with crushed black pepper, scallions, roasted cumin, and a zest of fresh kaffir lime.',
    price: 14,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=80',
    isVeg: true,
    tag: 'Crispy Delight',
    spiciness: 1,
    prepTime: '12 mins',
    calories: '280 kcal'
  },
  {
    id: 'starter-3',
    name: 'Chicken 65',
    category: 'Starters',
    description: 'Tender chicken morsels wok-flashed with curry leaves, cracked mustard seeds, dried Guntur chilies, and tangy yogurt glaze.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=900&q=80',
    isVeg: false,
    tag: 'Classic Spice',
    spiciness: 3,
    prepTime: '18 mins',
    calories: '420 kcal'
  },
  {
    id: 'starter-4',
    name: 'Vegetable Spring Rolls',
    category: 'Starters',
    description: 'Hand-rolled wafer-thin pastry encasing wok-tossed glass noodles, farm-fresh cabbage, julienned carrots, served with sweet chili plum dip.',
    price: 13,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    isVeg: true,
    tag: 'Crunchy Favorite',
    spiciness: 1,
    prepTime: '14 mins',
    calories: '260 kcal'
  },

  // MAIN COURSE
  {
    id: 'main-1',
    name: 'Velora Special Biryani',
    category: 'Main Course',
    description: 'Our crown jewel: Aged Dehradun basmati rice layered with royal saffron, slow-braised spices, fried shallots, and slow dum-cooked in sealed earthen clay.',
    price: 26,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80',
    isVeg: false,
    tag: "Chef's Special",
    spiciness: 2,
    prepTime: '25 mins',
    calories: '650 kcal'
  },
  {
    id: 'main-2',
    name: 'Butter Chicken',
    category: 'Main Course',
    description: 'Tandoor-charred chicken steeped in a decadent velvet makhani gravy enriched with ripe San Marzano tomatoes, churned butter, and dried Kasuri methi.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
    isVeg: false,
    tag: 'All-Time Favorite',
    spiciness: 1,
    prepTime: '20 mins',
    calories: '580 kcal'
  },
  {
    id: 'main-3',
    name: 'Paneer Butter Masala',
    category: 'Main Course',
    description: 'Velvety artisanal paneer cubes simmered gently in a slow-simmered rich cashew nut and ripe vine-tomato emulsion with royal cardamom notes.',
    price: 21,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80',
    isVeg: true,
    tag: 'House Special',
    spiciness: 1,
    prepTime: '18 mins',
    calories: '510 kcal'
  },
  {
    id: 'main-4',
    name: 'Vegetable Fried Rice',
    category: 'Main Course',
    description: 'Fragrant long-grain Jasmine rice wok-tossed over high flame with garden baby corn, French beans, toasted garlic flakes, and organic light soy drizzle.',
    price: 17,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
    isVeg: true,
    tag: 'Wok Seared',
    spiciness: 1,
    prepTime: '15 mins',
    calories: '390 kcal'
  },
  {
    id: 'main-5',
    name: 'Grilled Chicken',
    category: 'Main Course',
    description: 'Prime marinated chicken supreme pan-seared with fresh rosemary sprigs, cracked peppercorns, crushed garlic, served with charred lemon and minted jus.',
    price: 23,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80',
    isVeg: false,
    tag: 'High Protein',
    spiciness: 1,
    prepTime: '22 mins',
    calories: '490 kcal'
  },

  // DESSERTS
  {
    id: 'dessert-1',
    name: 'Gulab Jamun',
    category: 'Desserts',
    description: 'Delicate melt-in-mouth milk dumplings hand-rolled and steeped warm in organic Persian rose water, emerald cardamom, and saffron syrup with slivered pistachios.',
    price: 11,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80',
    isVeg: true,
    tag: 'Heritage Sweet',
    spiciness: 0,
    prepTime: '10 mins',
    calories: '320 kcal'
  },
  {
    id: 'dessert-2',
    name: 'Chocolate Brownie',
    category: 'Desserts',
    description: 'Warm 70% dark Valrhona chocolate fudge brownie with molten center, crowned with roasted pecan crunch and warm Madagascar vanilla glaze.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
    isVeg: true,
    tag: 'Decadent',
    spiciness: 0,
    prepTime: '10 mins',
    calories: '440 kcal'
  },
  {
    id: 'dessert-3',
    name: 'Cheesecake',
    category: 'Desserts',
    description: 'Velvety New York style baked cheesecake on a golden graham crust, laced with an Alphonso mango coulis and fresh seasonal berries.',
    price: 13,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80',
    isVeg: true,
    tag: 'Silky Texture',
    spiciness: 0,
    prepTime: '8 mins',
    calories: '390 kcal'
  },
  {
    id: 'dessert-4',
    name: 'Ice Cream',
    category: 'Desserts',
    description: 'Artisanal churned trio featuring Royal Malai Saffron Kulfi, Tahitian Vanilla Bean, and Toasted Sicilian Pistachio with edible gold leaf garnish.',
    price: 9,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
    isVeg: true,
    tag: 'Artisan Churned',
    spiciness: 0,
    prepTime: '6 mins',
    calories: '240 kcal'
  }
];

export const ABOUT_HIGHLIGHTS = [
  {
    title: 'Fresh Ingredients',
    description: 'Organically grown spices, farm-sourced produce, and cold-pressed oils picked daily for peak natural flavor and nutrition.',
    icon: 'Leaf'
  },
  {
    title: 'Crafted With Care',
    description: 'Time-honored recipes perfected over decades, infused with innovative contemporary cooking techniques and artistic plating.',
    icon: 'Flame'
  },
  {
    title: 'Warm Ambience',
    description: 'Intimate candlelight, acoustic warmth, and refined teak interiors creating an enchanting sanctuary for every meal.',
    icon: 'Sparkles'
  },
  {
    title: 'Exceptional Service',
    description: 'Attentive, discreet hospitality rooted in timeless traditions where every guest is honored with royal devotion.',
    icon: 'Award'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Velora Grand Dining Room',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    description: 'Soothing emerald velvet booths, warm pendant fixtures, and polished brass finishes.',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'gal-2',
    title: 'Velora Special Biryani Pot',
    category: 'Biryani',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80',
    description: 'Slow sealed dum-cooking unleashing royal saffron aromas and layered spices.',
    span: 'col-span-1'
  },
  {
    id: 'gal-3',
    title: 'Precision Tandoor Plating',
    category: 'Chef Craft',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80',
    description: 'Executive Chef finishing artisanal skewers with microgreens and botanical oils.',
    span: 'col-span-1'
  },
  {
    id: 'gal-4',
    title: 'Signature Butter Chicken & Naan',
    category: 'Signature Dishes',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
    description: 'Simmered overnight in slow copper cauldrons for quintessential silkiness.',
    span: 'col-span-1'
  },
  {
    id: 'gal-5',
    title: 'Handcrafted Desserts & Sweets',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
    description: 'Delectable dessert finales pairing traditional confections with modern pastry crafts.',
    span: 'col-span-1'
  },
  {
    id: 'gal-6',
    title: 'Intimate Dining Experience',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    description: 'Guests savoring an unforgettable evening of culinary memories and wine pairings.',
    span: 'col-span-1 md:col-span-2'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Eleanor Vance',
    role: 'Food & Wine Critic',
    rating: 5,
    date: 'February 2025',
    comment: 'VELORA represents the zenith of modern Indian gastronomy. The Velora Special Biryani was sublime—every single grain of rice sang with saffron and deep aromatics.',
    favoriteDish: 'Velora Special Biryani',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    name: 'Rajiv Malhotra',
    role: 'Local Patron & Architect',
    rating: 5,
    date: 'January 2025',
    comment: 'The interior atmosphere is intoxicating—rich emerald greens, soft warm glow, and flawless acoustic comfort. The Paneer Tikka was the softest and most flavorful I have ever tasted in any restaurant.',
    favoriteDish: 'Paneer Tikka & Butter Chicken',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    name: 'Sophia Laurent',
    role: 'Hospitality Consultant',
    rating: 5,
    date: 'March 2025',
    comment: 'From the warm greeting at the door to the final bite of warm cardamom-scented Gulab Jamun, the service was pure perfection. An extraordinary dining destination for celebrations.',
    favoriteDish: 'Gulab Jamun & Chef Special',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-4',
    name: 'Marcus Sterling',
    role: 'Culinary Traveler',
    rating: 5,
    date: 'February 2025',
    comment: 'Contemporary execution with soul-stirring authenticity. The Butter Chicken is worth flying across continents for. VELORA strikes the exact harmony of elegance and comfort.',
    favoriteDish: 'Butter Chicken & Crispy Corn',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];
