import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './i18n';
import './index.css';
const container = document.getElementById('root');

if (container instanceof HTMLElement) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
