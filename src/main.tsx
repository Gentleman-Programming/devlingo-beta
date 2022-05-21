import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from '@/redux';
import './i18n';
import './Reset.css';
import './index.css';

const container = document.getElementById('root');

if (container instanceof HTMLElement) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  );
}
