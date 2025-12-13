export interface Cart {
  items: Record<string, Item>;
}

export interface Item {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
