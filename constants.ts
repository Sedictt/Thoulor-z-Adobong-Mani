import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Thoulorz Classic Garlic',
    description: 'The OG recipe. Crunchy peanuts deep-fried with generous amounts of crispy garlic chips and sea salt.',
    price: 120,
    image: 'https://picsum.photos/seed/peanut1/500/500',
    tags: ['Best Seller', 'Garlic', 'Classic'],
    spiceLevel: 0,
  },
  {
    id: 'p2',
    name: 'Spicy Demon Chili',
    description: 'Not for the faint of heart. Infused with labuyo peppers and chili oil for a fiery kick.',
    price: 130,
    image: 'https://picsum.photos/seed/peanut2/500/500',
    tags: ['Spicy', 'Hot', 'Chili'],
    spiceLevel: 3,
  },
  {
    id: 'p3',
    name: 'Sweet & Salty Glaze',
    description: 'A perfect balance of caramelized brown sugar and rock salt. The addictive sweet crunch.',
    price: 135,
    image: 'https://picsum.photos/seed/peanut3/500/500',
    tags: ['Sweet', 'Kids Love It'],
    spiceLevel: 0,
  },
  {
    id: 'p4',
    name: 'Adobo Skinless Special',
    description: 'Skinless peanuts marinated in a secret soy-vinegar blend before frying. Savory umami bomb.',
    price: 150,
    image: 'https://picsum.photos/seed/peanut4/500/500',
    tags: ['Premium', 'Savory', 'Umami'],
    spiceLevel: 1,
  },
];

export const SYSTEM_INSTRUCTION = `You are "Thoulorz AI", a friendly and energetic assistant for the Thoulorz Adobong Mani brand. 
Your goal is to help customers choose the perfect peanut flavor.
The available flavors are:
1. Classic Garlic (Crispy, salty, garlic chips)
2. Spicy Demon Chili (Very hot, labuyo peppers)
3. Sweet & Salty Glaze (Caramelized sugar, dessert-like)
4. Adobo Skinless Special (Savory, marinated, premium)

Keep your responses concise, fun, and appetizing. Use Filipino slang occasionally (like "lodi", "sarap", "pulutan") but keep it understandable for English speakers. 
Suggest pairings (e.g., "Classic Garlic goes great with a cold beer!").
Do not invent prices. Prices are in PHP (Pesos).
`;
