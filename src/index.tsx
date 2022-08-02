import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>
);
