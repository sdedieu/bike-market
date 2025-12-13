import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

class MfeAngular extends HTMLElement {
  connectedCallback() {
    const element = document.createElement('app-root-chat');
    this.appendChild(element);
    bootstrapApplication(App, appConfig).catch((err) => console.error(err));
  }
}

customElements.define('chat-web-component', MfeAngular);
