export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  spiceLevel: number; // 0-3
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export enum AppView {
  HOME = 'HOME',
  SHOP = 'SHOP',
  CHECKOUT = 'CHECKOUT'
}
