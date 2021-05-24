import './styles/main.scss';
import { menu, menu1 } from './js/menu.js';

const heading = document.createElement('h1')
heading.textContent = 'Romain Dupont Webpack Config'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading, menu, menu1())
