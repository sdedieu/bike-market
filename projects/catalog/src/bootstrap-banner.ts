import { bootstrapApplication } from '@angular/platform-browser';
import { Banner } from './banner/banner';
import { config } from './banner/banner.config';

class MfeAngular extends HTMLElement {
  connectedCallback() {
    const element = document.createElement('app-root-catalog-banner');
    this.appendChild(element);
    bootstrapApplication(Banner, config).catch((err) => console.error(err));
  }
}

customElements.define('catalog-banner-web-component', MfeAngular);
