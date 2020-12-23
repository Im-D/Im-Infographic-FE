import { html } from 'https://unpkg.com/lit-html?module';

import PRCard from 'https://process.im-d.dev/Im-Infographic-FE/src/components/PRCard@1.js'

export default ({title, url, name, createdAt, labels, reviewers}) => {
  return html`
    <style>
      .date-card {
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

      .date-card__header{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        box-sizing: border-box;
      }

      .date-card__main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;

        padding: 12px 12px 4px;
        box-sizing: border-box;
      }

      .date-card__name-card{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        width: 100%;

        padding: 8px 0 16px;
      }

      .date-card__name-card__text {
        padding: 4px 12px;

        border: none;
        border-radius: 25px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
        background-color: #f4ebc1;

        font-size: 16px;
        font-weight: bold;
        color: #000;
      }

      .date-card__user-list{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        width: 100%;

        box-sizing: border-box;
        overflow-y: auto;
        -ms-overflow-style: none;
      }

      .date-card__user-image{
        width: 48px;
        height: 48px;

        margin-left: 12px;
        margin-right: 12px;

        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      }
    </style>
    <section class="date-card">
      <section class="date-card__header">
        ${PRCard({title, url, name, createdAt, labels: labels.nodes})}
      </section>
      <section class="date-card__main">
        <div class="date-card__name-card">
          <span class="date-card__name-card__text">미완료 User</span>
        </div>
        <div class="date-card__user-list">
          ${reviewers.map((reviewerInfo) => 
            html`
              <img 
                class="date-card__user-image" 
                src="${reviewerInfo.requestedReviewer.avatarUrl}">
              </img>
            `
          )}
        </div>
      </section>
    </section>
  `;
}