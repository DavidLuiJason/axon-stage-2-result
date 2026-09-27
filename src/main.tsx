import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerTestCapability } from './capabilities/registerTestCapability';

// Stage 2: explicit capability registration at startup (not React mount)
registerTestCapability();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
