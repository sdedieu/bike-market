import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root-catalog-banner',
  host: {
    class: 'flex items-center flex-col w-3/4 m-auto',
  },
  template: `
    <h1 class="font-mono text-3xl mb-6 tracking-wide">ROAD BIKES</h1>
    <div class="flex gap-6">
      <div class="flex-5">
        <img
          src="https://a.storyblok.com/f/263970/6169x3731/ae34a83d9c/22_watch-the-full-video.jpg/m/1920x0/filters:quality(75)"
        />
      </div>
      <div class="flex-3 flex flex-col gap-8">
        <video autoplay disablepictureinpicture="" disableremoteplayback="" muted="" playsinline="">
          <source
            src="https://a.storyblok.com/f/263970/x/d0f081ff59/colnago-2025-v5rs-sdm5-front-to-three-quarter2.mp4"
            type="video/mp4"
          />
        </video>
        <button
          (click)="goToRoadBikes()"
          class="border border-neutral-950 text-sm text-neutral-950 font-extralight py-2 px-20 hover:bg-neutral-950 hover:text-white"
        >
          BUY NOW
        </button>
      </div>
      <div class="flex-1 flex flex-col gap-2">
        <div class="bg-neutral-950 p-3">
          <img
            src="https://cdn.shopify.com/s/files/1/0828/8980/2039/files/ColnagoV4RSteamman2024-Fondonero-lateralebaglioreoro_2.jpg?v=1709734763&width=1600&height=1600&crop=center"
          />
        </div>
        <div class="bg-neutral-950 p-3">
          <img
            src="https://cdn.shopify.com/s/files/1/0828/8980/2039/files/COLNAGO_Y1Rs-VIOLA-laterale-fondo_nero_bagliore_oro_bis.png?v=1751298126&width=1600&height=1600&crop=center"
          />
        </div>
        <div class="bg-neutral-950 p-3">
          <img
            src="https://cdn.shopify.com/s/files/1/0828/8980/2039/files/c68_road_config_resized.jpg?v=1708523910&width=1600&height=1600&crop=center"
          />
        </div>
      </div>
    </div>
  `,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Banner {
  goToRoadBikes() {
    const event = new CustomEvent('router', {
      detail: {
        route: '/catalog?type=road',
      },
    });
    window.dispatchEvent(event);
  }
}
