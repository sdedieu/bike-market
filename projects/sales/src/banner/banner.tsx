import React from 'react';
import { BannerBackground } from './banner-background';

export function Banner() {
  function goToSales() {
    const event = new CustomEvent('router', {
      detail: {
        route: '/sales',
      },
    });
    window.dispatchEvent(event);
  }

  return (
    <>
      <div className="w-full relative h-96">
        <section className="absolute bottom-1/10 sm:left-20 left-8 text-white tracking-wide">
          <p class="text-2xl font-light">Elite bike & Best prices</p>
          <h1 class="font-mono text-6xl mb-3">COLNAGO SALES</h1>

          <button
            onClick={goToSales}
            class="border border-white text-sm font-extralight py-2 px-20 hover:bg-white hover:text-neutral-950"
          >
            BUY NOW
          </button>
        </section>
      </div>

      <BannerBackground />
    </>
  );
}
