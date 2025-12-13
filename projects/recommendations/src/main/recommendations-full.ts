import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandBanner } from '../banner/brand-banner';

@Component({
  selector: 'app-root-recommendations-banner',
  host: {
    class: 'flex items-center flex-col',
  },
  template: `
    <div class="w-full relative h-[calc(100dvh-200px)] z-1">
      <section class="absolute bottom-1/10 sm:left-20 left-8 text-white tracking-wide">
        <p class="text-2xl font-light">Elite bike & Best prices</p>
        <h1 class="font-mono text-6xl mb-3">COLNAGO</h1>

        <a
          routerLink="/catalog"
          [queryParams]="{ brand: 'colnago' }"
          class="border border-white text-sm font-extralight py-2 px-20 hover:bg-white hover:text-neutral-950"
        >
          BUY NOW
        </a>
      </section>
    </div>

    <section class="absolute top-0 left-0 w-full bg-neutral-950 pointer-events-none">
      <iframe
        src="https://player.vimeo.com/video/1135874285?autoplay=1&amp;background=1&amp;loop=1&amp;muted=1&amp;controls=0&amp;autopause=1"
        allow="autoplay; fullscreen"
        allowfullscreen=""
        class="hidden xl:block w-full relative aspect-[16/9]"
      ></iframe>

      <iframe
        src="https://player.vimeo.com/video/1135871474?autoplay=1&background=1&loop=1&muted=1&controls=0&autopause=1"
        allow="autoplay; fullscreen"
        allowfullscreen=""
        class="block xl:hidden w-full relative aspect-[9/16]"
      ></iframe>
    </section>
    <div class="absolute top-0 left-0 w-full h-full bg-neutral-950/20"></div>

    <bmreco-brand-banner />
  `,
  imports: [RouterLink, BrandBanner],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsFull {}
