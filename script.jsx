import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'

ReactDOM.createRoot(
  document.querySelector('#root')
).render(<App />)

const modal = document.getElementById('modal');
const modalOpener = document.getElementById('modal-opener');

 modalOpener.addEventListener('click', () => {
 modal.classList.toggle('hidden');
      });