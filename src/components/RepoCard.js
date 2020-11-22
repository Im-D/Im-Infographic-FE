import { html } from 'https://unpkg.com/lit-html?module';

export default ({ name = 'Dev-Docs', url = '', description = 'Repository Contents', stars = 0, forks = 0 }) => {
  return html`
    <style>
      .repo-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        min-width: 400px;
        padding: 16px;

        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
        background-color: #214252;
        color: #fff;
      }

      .repo-card__header {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        font-size: 18px;
        font-weight: bold;
      }

      .repo-card__contents {
        margin: 8px 4px 10px;
        box-sizing: border-box;
      }

      .repo-card__footer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
      }

      .repo-card__item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin-right: 12px;
      }

      .repo-card__icon {
        margin: 4px;
      }

      .repo-card__footer__txt {
        font-size: 12px;
        color: #fff;
      }
    </style>
    <a href="${url}" target="_blank" class="repo-card">
      <section class="repo-card__header">
        <object 
          class="repo-card__icon" 
          data="/assets/icons/github/repo.svg" 
          type="image/svg+xml">
        </object>
        <p>${name}</p>
      </section>
      <p class="repo-card__contents">
        ${description}
      </p>
      <section class="repo-card__footer">
        <div class="repo-card__item">
          <object 
            class="repo-card__icon" 
            data="/assets/icons/github/stars.svg" 
            type="image/svg+xml">
          </object>
          <span class="repo-card__footer__txt">${stars}</span>
        </div>

        <div class="repo-card__item">
          <object 
            class="repo-card__icon" 
            data="/assets/icons/github/forks.svg" 
            type="image/svg+xml">
          </object>
          <span class="repo-card__footer__txt">${forks}</span>
        </div>
      </section>
    </a>
  `;
}