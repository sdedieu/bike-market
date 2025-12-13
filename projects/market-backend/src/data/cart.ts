import { Bike, BikeBrand, colnagos } from './bike';

export interface Item {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Cart {
  items: Record<string, Item>;
}

export class Cart {
  items = {
    [colnagos[0].id]: {
      id: colnagos[0].id,
      name: colnagos[0].name,
      price: colnagos[0].price,
      image: colnagos[0].image,
      quantity: 1,
    },
    [colnagos[1].id]: {
      id: colnagos[1].id,
      name: colnagos[1].name,
      price: colnagos[1].price,
      image: colnagos[1].image,
      quantity: 1,
    },
  };

  addItem(item: Bike) {
    const existing = this.items[item.id];
    this.items = {
      ...this.items,
      [item.id]: existing ? { ...item, quantity: existing.quantity + 1 } : { ...item, quantity: 1 },
    };
  }

  setQuantity(itemId: string, quantity: number) {
    this.items = {
      ...this.items,
      [itemId]: { ...this.items[itemId], quantity: quantity },
    };
  }

  removeItem(item: Bike) {
    delete this.items[item.id];
  }

  clear() {
    this.items = {};
  }
}

export const cart: Cart = new Cart();
