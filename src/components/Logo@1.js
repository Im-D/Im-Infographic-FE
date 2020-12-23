import { html } from 'https://unpkg.com/lit-html?module';

export default () => {
  return html`
    <style>
      .logo {
        width: 100px;
        height: 30px;

        border-radius: 4px;
        object-fit: cover;
      }
    </style>
    <img class="logo" src="https://process.im-d.dev/Im-Infographic-FE/assets/images/img-logo.png">
  `;
}