import { html } from 'https://unpkg.com/lit-html?module';

export default ({name = 'github_name', href = '#'}) => {
  return html`
    <style>
      .name-tag {
        padding: 6px 12px;

        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1.5px;
        color: #fff;

        border-radius: 25px;
        background-color: #709fb0;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);

        cursor: pointer;
      }
    </style>
    <a class="name-tag" href="${href}" target="_blank"># ${name}</a>
  `;
}