export interface ShowreelItem {
  id: number;
  thumbnail: string;
  brand: string;
  tags: string[];
}

const STORAGE_KEY = "managedShowreels";

const defaultReels: ShowreelItem[] = [
  { id: 1, thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=700&fit=crop", brand: "Restaurant Promo", tags: ["food", "local business"] },
  { id: 2, thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=700&fit=crop", brand: "Fashion Store", tags: ["lifestyle", "retail"] },
  { id: 3, thumbnail: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=700&fit=crop", brand: "Café Launch", tags: ["café", "influencer"] },
  { id: 4, thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=700&fit=crop", brand: "Fitness Studio", tags: ["health", "AI video"] },
  { id: 5, thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=700&fit=crop", brand: "Product Shoot", tags: ["e-commerce", "real footage"] },
];

export function getAllShowreels(): ShowreelItem[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultReels));
    return defaultReels;
  }
  return JSON.parse(stored);
}

export function saveShowreels(items: ShowreelItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function addShowreel(item: ShowreelItem) {
  const items = getAllShowreels();
  saveShowreels([...items, item]);
}

export function updateShowreel(id: number, updated: ShowreelItem) {
  const items = getAllShowreels();
  saveShowreels(items.map((r) => (r.id === id ? updated : r)));
}

export function deleteShowreel(id: number) {
  const items = getAllShowreels();
  saveShowreels(items.filter((r) => r.id !== id));
}
