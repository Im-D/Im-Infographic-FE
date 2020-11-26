import { html } from 'https://unpkg.com/lit-html?module';

import Header from 'https://im-d.github.io/Im-Infographic-FE/src/components/Header@1.js'
import Main from 'https://im-d.github.io/Im-Infographic-FE/src/components/Main@1.js'

export default (data) => {
  return html`
    ${Header()}
    ${Main()}
  `;
}