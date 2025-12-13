import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './main/recommendations-full.config';
import { RecommendationsFull } from './main/recommendations-full';

class MfeAngular extends HTMLElement {
  connectedCallback() {
    const element = document.createElement('app-root-recommendations-full');
    this.appendChild(element);
    bootstrapApplication(RecommendationsFull, config).catch((err) => console.error(err));
  }
}

customElements.define('recommendations-full-web-component', MfeAngular);
