import { Bike } from './bike';

export interface Cart {
  items: Bike[];
  itemsCount: number;
}

export class Cart {
  items: Bike[] = [];
  itemsCount = 0;

  addItem(item: Bike) {
    this.items = [...this.items, item];
    this.itemsCount = this.items.length;
  }

  removeItem(item: Bike) {
    this.items = this.items.filter((i) => i.id === item.id);
    this.itemsCount = this.items.length;
  }

  clear() {
    this.items = [];
    this.itemsCount = this.items.length;
  }
}

export const cart: Cart = new Cart();
