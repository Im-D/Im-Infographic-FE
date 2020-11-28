import { html } from 'https://unpkg.com/lit-html?module';

import NameTag from 'https://im-d.github.io/Im-Infographic-FE/src/components/NameTag@1.js'
import PRCard from 'https://im-d.github.io/Im-Infographic-FE/src/components/PRCard@1.js'

export default ({ idx = 1, name, url, avatarUrl = './assets/images/img-logo.png', prList = [] }) => {
  const prStyles = {
    marginBottom: '8px'
  }

  return html`
    <style>
      .user-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 600px;

        padding: 12px;
        margin-bottom: 12px;

        box-sizing: border-box;
        border-radius: 8px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      }

      .user-card__header{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        box-sizing: border-box;
      }

      .user-card__number{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 24px;
        height: 24px;

        border-radius:50%;
        border: 2px solid #000;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);

        font-size: 14px;
        font-weight: bold;
      }

      .user-card__user-image{
        width: 48px;
        height: 48px;

        margin-left: 12px;
        margin-right: 12px;

        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      }

      .user-card__main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;

        padding: 12px 0px 0px;
        box-sizing: border-box;
      }

      .user-card__name-card{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        width: 100%;

        padding: 8px 0 20px;
      }

      .user-card__name-card__text {
        padding: 4px 12px;

        border: none;
        border-radius: 25px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
        background-color: #f4ebc1;

        font-size: 16px;
        font-weight: bold;
        color: #000;
      }
    </style>
    <section class="user-card">
      <section class="user-card__header">
        <span class="user-card__number">${idx}</span>
        <img class="user-card__user-image" src="${avatarUrl}">
        ${NameTag({ name, href: url })}
      </section>
      <section class="user-card__main">
        <div class="user-card__name-card">
          <span class="user-card__name-card__text">미완료 PR</span>
        </div>
          ${prList.map((prInfo, idx) => 
            PRCard({ 
              ...prInfo, 
              name, 
              styles: prList.length === idx + 1 ? {} : prStyles, 
              labels: prInfo.labels.nodes
            })
          )}
      </section>
    </section>
  `;
}