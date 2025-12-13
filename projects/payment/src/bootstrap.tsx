import '@vitejs/plugin-react/preamble';
import React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { App } from './app';

class MfeReact extends HTMLElement {
  private root?: Root;

  connectedCallback() {
    this.root = createRoot(this);
    this.root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    this.root?.unmount();
  }
}

if (!customElements.get('payment-web-component')) {
  customElements.define('payment-web-component', MfeReact);
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'payment-web-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export function Mfe() {
  return <payment-web-component></payment-web-component>;
}
