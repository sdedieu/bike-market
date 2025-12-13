import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

class MfeReact extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      this
    );
  }
}

customElements.define('payment-web-component', MfeReact);

export function Mfe() {
  return <payment-web-component></payment-web-component>;
}
