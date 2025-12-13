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
    image:
      'https://cdn.shopify.com/s/files/1/0828/8980/2039/files/Y1Rs-TeamMan-bagliore_oro-laterale_1.jpg?v=1733707699&width=1800&height=1800&crop=center',
  },
  {
    id: 'v5rs-road',
    name: 'V5Rs',
    brand: BikeBrand.COLNAGO,
    price: 14000,
    image:
      'https://cdn.shopify.com/s/files/1/0828/8980/2039/files/1_SDM5-laterale_3_f56c9806-babd-427e-811d-0e7b2c149e31.jpg?v=1744787522&width=1600&height=1600&crop=center',
  },
  {
    id: 'c68-road',
    name: 'C68 Road',
    brand: BikeBrand.COLNAGO,
    price: 10499,
    image:
      'https://cdn.shopify.com/s/files/1/0828/8980/2039/files/ColnagoC682024-blubianco-Fondoneroeffettooro-laterale_resized.jpg?v=1708768736&width=1600&height=1600&crop=center',
  },
  {
    id: 'steelnovo-road',
    name: 'Steelnovo',
    brand: BikeBrand.COLNAGO,
    price: 5500,
    image:
      'https://cdn.shopify.com/s/files/1/0828/8980/2039/files/Colnago_Steelnovo_SNLB-black-baclground-complete-bike-gold_2_7891da2b-05f3-4275-9d57-66a99e2a22af.jpg?v=1762921420&width=1600&height=1600&crop=center',
  },
  {
    id: 'v4rs-road',
    name: 'V4Rs',
    brand: BikeBrand.COLNAGO,
    price: 8900,
    image:
      'https://cdn.shopify.com/s/files/1/0828/8980/2039/files/ColnagoV4RSteamman2024-Fondonero-lateralebaglioreoro_2.jpg?v=1709734763&width=1600&height=1600&crop=center',
  },
  {
    id: 'c68-road-ti',
    name: 'C68 Road Ti',
    brand: BikeBrand.COLNAGO,
    price: 15599,
    image:
      'https://cdn.shopify.com/s/files/1/0828/8980/2039/files/C68roadtifull_resized.jpg?v=1709181330&width=1600&height=1600&crop=center',
  },
  {
    id: 'v4-road',
    name: 'V4',
    brand: BikeBrand.COLNAGO,
    price: 5399,
    image:
      'https://cdn.shopify.com/s/files/1/0828/8980/2039/files/COLNAGO_V4_BIANCO_-_laterale_bagliore_oro.jpg?v=1741088328&width=1600&height=1600&crop=center',
  },
  {
    id: 'c68-road-rim',
    name: 'C68 Road Rim Brake',
    brand: BikeBrand.COLNAGO,
    price: 7299,
    image:
      'https://cdn.shopify.com/s/files/1/0828/8980/2039/files/Colnago_C68_rim_2024_-_Fondo_nero-laterale_bagliore_oro_1.jpg?v=1722593634&width=1600&height=1600&crop=center',
  },
  {
    id: 'c68-road-rossa',
    name: 'C68 Road Rossa',
    brand: BikeBrand.COLNAGO,
    price: 23800,
    image:
      'https://cdn.shopify.com/s/files/1/0828/8980/2039/files/COLNAGO_C68_X_LA_VUELTA-laterale-fondo_nero_bagliore_oro.jpg?v=1755612975&width=1600&height=1600&crop=center',
  },
];

const cervelos = [
  {
    id: 'r5-road',
    name: 'R5',
    brand: BikeBrand.CERVELO,
    price: 12999,
    image:
      'https://www.cervelo.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fcervelo%2FaFxeT3fc4bHWiuqu_0L0R5HRX1C-PROFILE-Web.png%3Fauto%3Dformat%2Ccompress&w=2600&q=99',
  },
  {
    id: 's5-road',
    name: 'S5',
    brand: BikeBrand.CERVELO,
    price: 13999,
    image:
      'https://www.cervelo.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fcervelo%2FaFw4XXfc4bHWiuRn_0L0S5GDI1C-PROFILE-Web.png%3Fauto%3Dformat%2Ccompress&w=2600&q=99',
  },
  {
    id: 'soloist-road',
    name: 'SOLOIST',
    brand: BikeBrand.CERVELO,
    price: 6999,
    image:
      'https://www.cervelo.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fcervelo%2FaFxeL3fc4bHWiuqW_0L0STAFX2C-PROFILE-Web.png%3Fauto%3Dformat%2Ccompress&w=2600&q=99',
  },
  {
    id: 'caledonia-5-road',
    name: 'CALEDONIA-5',
    brand: BikeBrand.CERVELO,
    price: 6999,
    image:
      'https://www.cervelo.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fcervelo%2FaFxDn3fc4bHWiuX9_0L0CFBFX2C-PROFILE-Web.png%3Fauto%3Dformat%2Ccompress&w=2600&q=99',
  },
  {
    id: 'caledonia-road',
    name: 'CALEDONIA',
    brand: BikeBrand.CERVELO,
    price: 4299,
    image:
      'https://www.cervelo.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fcervelo%2FZnnHaZbWFbowe0Ou_0K0CAAVX2A-PROFILE-Web.png%3Fauto%3Dformat%2Ccompress&w=2600&q=99',
  },
];

const specialized = [
  {
    id: 'tarmac-sl8-road',
    name: 'TARMAC SL8',
    brand: BikeBrand.SPECIALIZED,
    price: 13499,
    image:
      'https://assets.specialized.com/i/specialized/94926-03_TARMAC-SL8-SW-AXS-REDSKY-SHDWSIL-WHT_HERO-PDP_DARK?$scom-pdp-gallery-image-premium$&fmt=webp',
  },
  {
    id: 'aethos-2-road',
    name: 'AETHOS 2',
    brand: BikeBrand.SPECIALIZED,
    price: 13499,
    image:
      'https://assets.specialized.com/i/specialized/97226-00_AETHOS-SW-DI2-PRMFJDMET-DLMMET_HERO_DARK-PDP?$scom-pdp-gallery-image-premium$&fmt=webp',
  },
];

const canyons = [
  {
    id: 'aeroad-cfr-road',
    name: 'Aeroad CFR',
    brand: BikeBrand.CANYON,
    price: 8999,
    image:
      'https://dma.canyon.com/image/upload/w_767,c_fit/f_auto/q_auto/v1749020113/2026_FULL_aeroad_cfr-di2_4039_R108_P03_rb7wpt',
  },
  {
    id: 'ultimate-cfr-road',
    name: 'Ultimate CFR',
    brand: BikeBrand.CANYON,
    price: 7999,
    image:
      'https://dma.canyon.com/image/upload/w_1100,c_fit/f_auto/q_auto/v1745476494/2026_FULL_ultimate_cfr-di2_4069_R102_P09_tt1hko',
  },
];

export const bikes: Bike[] = [...colnagos, ...cervelos, ...specialized, ...canyons];

// [...Array(100).keys()].map((id) => ({
//   id: `${id}`,
//   name: 'V5Rs',
//   brand: BikeBrand.COLNAGO,
//   price: 14000,
//   image:
//     'https://cdn.shopify.com/s/files/1/0828/8980/2039/files/1_SDM5-laterale_3_f56c9806-babd-427e-811d-0e7b2c149e31.jpg?v=1744787522&width=1600&height=1600&crop=center',
// }));
