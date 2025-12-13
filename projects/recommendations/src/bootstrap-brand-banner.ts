import { bootstrapApplication } from '@angular/platform-browser';
import { BrandBanner } from './banner/brand-banner';
import { config } from './banner/brand.config';

class MfeAngular extends HTMLElement {
  connectedCallback() {
    const element = document.createElement('app-root-recommendations-brand-banner');
    this.appendChild(element);
    bootstrapApplication(BrandBanner, config).catch((err) => console.error(err));
  }
}

customElements.define('recommendations-web-component', MfeAngular);
