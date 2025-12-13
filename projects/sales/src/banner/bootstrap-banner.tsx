import React from 'react';
import ReactDOM from 'react-dom';
import { Banner } from './banner';

class MfeSalesBanner extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(
      <React.StrictMode>
        <Banner />
      </React.StrictMode>,
      this
    );
  }
}

customElements.define('sales-banner-web-component', MfeSalesBanner);

export function MfeBanner() {
  return <sales-banner-web-component></sales-banner-web-component>;
}
