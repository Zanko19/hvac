import './style.css'
import { createHeader } from './components/Header.js'
import { createHero } from './components/Hero.js'
import { createServices } from './components/Services.js'
import { createAbout } from './components/About.js'
import { createContact } from './components/Contact.js'
import { createFooter } from './components/Footer.js'
import { initializeInteractions } from './components/Interactions.js'

// Construire la page
document.querySelector('#app').innerHTML = `
  ${createHeader()}
  ${createHero()}
  ${createServices()}
  ${createAbout()}
  ${createContact()}
  ${createFooter()}
`

// Initialiser les interactions après le chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  initializeInteractions();
});
