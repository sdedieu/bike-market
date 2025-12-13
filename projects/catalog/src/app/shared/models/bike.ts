export enum BikeBrand {
  COLNAGO = 'colnago',
  CERVELO = 'cervelo',
  SPECIALIZED = 'specialized',
  CANYON = 'canyon',
}

export interface Bike {
  id: string;
  name: string;
  brand: BikeBrand;
  price: number;
  image: string;
}
