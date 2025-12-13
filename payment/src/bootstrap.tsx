import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

class MfeReact extends HTMLElement {
  private _root!: Root;
  connectedCallback() {
    this._root = createRoot(this);

    this._root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }

  disconnectedCallback() {
    // IMPORTANT: clean up when the custom element is removed
    this._root?.unmount();
  }
}

customElements.define('payment-web-component', MfeReact);

export function Mfe() {
  return <payment-web-component></payment-web-component>;
}
