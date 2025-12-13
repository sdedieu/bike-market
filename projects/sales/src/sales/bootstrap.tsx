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

customElements.define('sales-web-component', MfeReact);

export function Mfe() {
  return <sales-web-component></sales-web-component>;
}
