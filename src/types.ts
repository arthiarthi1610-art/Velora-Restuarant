export type MenuCategory = 'Starters' | 'Main Course' | 'Desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  tag?: string;
  spiciness?: number; // 0 to 3
  prepTime?: string;
  calories?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  favoriteDish: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior' | 'Signature Dishes' | 'Biryani' | 'Desserts' | 'Chef Craft' | 'Dining';
  image: string;
  description: string;
  span?: string;
}

export interface ReservationFormData {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: string;
  seatingPreference: string;
  specialRequest: string;
}

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}
