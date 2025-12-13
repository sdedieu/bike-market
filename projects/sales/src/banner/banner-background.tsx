import React from 'react';

export function BannerBackground() {
  return (
    <>
      <section className="absolute top-0 left-0 -z-1 w-full bg-neutral-950 pointer-events-none">
        <iframe
          src="https://player.vimeo.com/video/1135874285?autoplay=1&amp;background=1&amp;loop=1&amp;muted=1&amp;controls=0&amp;autopause=1"
          allow="autoplay; fullscreen"
          allowfullscreen=""
          className="hidden xl:block w-full relative aspect-[16/9]"
        ></iframe>

        <iframe
          src="https://player.vimeo.com/video/1135871474?autoplay=1&background=1&loop=1&muted=1&controls=0&autopause=1"
          allow="autoplay; fullscreen"
          allowfullscreen=""
          className="block xl:hidden w-full relative aspect-[9/16]"
        ></iframe>
      </section>
      <div className="absolute top-0 left-0 -z-1 w-full h-full bg-neutral-950/20"></div>
    </>
  );
}
