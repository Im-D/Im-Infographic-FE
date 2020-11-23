import { html } from 'https://unpkg.com/lit-html?module';

import Header from './components/Header.js'
import Main from './components/Main.js'

export default (data) => {
  return html`
    ${Header()}
    ${Main()}
  `;
}