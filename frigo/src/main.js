import { createAbout } from './components/about.js';
import { createContact } from './components/contact.js';

const app = document.querySelector('#app');
app.innerHTML = `
  ${createAbout()}
  ${createContact()}
`;


import './index.css'
