import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map.js?module';

import PRLabel from './PRLabel.js'

export default ({ name = 'pull request name', styles = {}, labelName = 'needs review', labelColor = '#dcf968', date = '2020-11-24', author = 'SeonHyungJo' }) => {
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
    <section class="pr-card" style="${styleMap(styles)}">
      <object 
        class="pr-card__icon" 
        data="/assets/icons/github/pull-request.svg" 
        type="image/svg+xml">
      </object>
      <section class="pr-card__contents">
        <section class="pr-card__header">
          <span class="pr-card__title">${name}</span>
          ${PRLabel({name: labelName, color: labelColor})}
        </section>
        <section class="pr-card__main">
          <span class="pr-card__main__comment">opened ${date} by ${author}</span>
        </section>
      </section>
    </section>
  `;
}