import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map.js?module';

import PRLabel from 'https://process.im-d.dev/Im-Infographic-FE/src/components/PRLabel@1.js'
import PullRequestIcon from 'https://process.im-d.dev/Im-Infographic-FE/assets/icons/github/pull-request.js'

const zeroPrefix = (num) => (('0' + num).slice(-2))
const dateConvertor = (dateStr) => {
  const date = new Date(dateStr)
  return `${date.getFullYear()}-${zeroPrefix(date.getMonth() + 1)}-${zeroPrefix(date.getDate())}`
}

export default ({
  title = 'pull request name',
  url = '',
  name = 'SeonHyungJo',
  styles = {},
  createdAt = '2020-11-24',
  labels,
}) => {
  return html`
    <style>
      .pr-card {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;

        border: none;
        border-radius: 0px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
      }

      .pr-card__contents{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        padding: 8px;
      }

      .pr-card__icon{
        width: 16px;
        padding: 8px 0 0 16px;
      }

      .pr-card__title{
        color: #000;
        font-size: 16px;
        font-weight: bold;
      }

      .pr-card__main{
        margin-top: 4px;
      }

      .pr-card__main__comment{
        font-size: 12px;
        color: rgb(88, 96, 105);
      }
    </style>
    <a class="pr-card" href="${url}" target="_blank" style="${styleMap(styles)}">
      ${PullRequestIcon('pr-card__icon')}
      <section class="pr-card__contents">
        <section class="pr-card__header">
          <span class="pr-card__title">${title}</span>
          ${labels.map(label => PRLabel({ name: label.name, color: label.color }))}
        </section>
        <section class="pr-card__main">
          <span class="pr-card__main__comment">opened ${dateConvertor(createdAt)} by ${name}</span>
        </section>
      </section>
    </a>
  `;
}