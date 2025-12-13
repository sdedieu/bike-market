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

export const colnagos = [
  {
    id: 'y1rs-road',
    name: 'Y1Rs',
    brand: BikeBrand.COLNAGO,
    price: 13299,
    image: '/api/images/bikes/y1rs-road.png',
  },
  {
    id: 'v5rs-road',
    name: 'V5Rs',
    brand: BikeBrand.COLNAGO,
    price: 14000,
    image: '/api/images/bikes/v5rs-road.png',
  },
  {
    id: 'c68-road',
    name: 'C68 Road',
    brand: BikeBrand.COLNAGO,
    price: 10499,
    image: '/api/images/bikes/c68-road.png',
  },
  {
    id: 'steelnovo-road',
    name: 'Steelnovo',
    brand: BikeBrand.COLNAGO,
    price: 5500,
    image: '/api/images/bikes/steelnovo-road.png',
  },
  {
    id: 'v4rs-road',
    name: 'V4Rs',
    brand: BikeBrand.COLNAGO,
    price: 8900,
    image: '/api/images/bikes/v4rs-road.png',
  },
  {
    id: 'c68-road-ti',
    name: 'C68 Road Ti',
    brand: BikeBrand.COLNAGO,
    price: 15599,
    image: '/api/images/bikes/c68-road-ti.png',
  },
  {
    id: 'v4-road',
    name: 'V4',
    brand: BikeBrand.COLNAGO,
    price: 5399,
    image: '/api/images/bikes/v4-road.png',
  },
  {
    id: 'c68-road-rim',
    name: 'C68 Road Rim Brake',
    brand: BikeBrand.COLNAGO,
    price: 7299,
    image: '/api/images/bikes/c68-road-rim.png',
  },
  {
    id: 'c68-road-rossa',
    name: 'C68 Road Rossa',
    brand: BikeBrand.COLNAGO,
    price: 23800,
    image: '/api/images/bikes/c68-road-rossa.png',
  },
];

const cervelos = [
  {
    id: 'r5-road',
    name: 'R5',
    brand: BikeBrand.CERVELO,
    price: 12999,
    image: '/api/images/bikes/r5-road.png',
  },
  {
    id: 's5-road',
    name: 'S5',
    brand: BikeBrand.CERVELO,
    price: 13999,
    image: '/api/images/bikes/s5-road.png',
  },
  {
    id: 'soloist-road',
    name: 'SOLOIST',
    brand: BikeBrand.CERVELO,
    price: 6999,
    image: '/api/images/bikes/soloist-road.png',
  },
  {
    id: 'caledonia-5-road',
    name: 'CALEDONIA-5',
    brand: BikeBrand.CERVELO,
    price: 6999,
    image: '/api/images/bikes/caledonia-5-road.png',
  },
  {
    id: 'caledonia-road',
    name: 'CALEDONIA',
    brand: BikeBrand.CERVELO,
    price: 4299,
    image: '/api/images/bikes/caledonia-road.png',
  },
];

const specialized = [
  {
    id: 'tarmac-sl8-road',
    name: 'TARMAC SL8',
    brand: BikeBrand.SPECIALIZED,
    price: 13499,
    image: '/api/images/bikes/tarmac-sl8-road.png',
  },
  {
    id: 'aethos-2-road',
    name: 'AETHOS 2',
    brand: BikeBrand.SPECIALIZED,
    price: 13499,
    image: '/api/images/bikes/aethos-2-road.png',
  },
];

const canyons = [
  {
    id: 'aeroad-cfr-road',
    name: 'Aeroad CFR',
    brand: BikeBrand.CANYON,
    price: 8999,
    image: '/api/images/bikes/aeroad-cfr-road.png',
  },
  {
    id: 'ultimate-cfr-road',
    name: 'Ultimate CFR',
    brand: BikeBrand.CANYON,
    price: 7999,
    image: '/api/images/bikes/ultimate-cfr-road.png',
  },
];

export const bikes: Bike[] = [...colnagos, ...cervelos, ...specialized, ...canyons];

