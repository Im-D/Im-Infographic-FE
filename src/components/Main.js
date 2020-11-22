import { html } from 'https://unpkg.com/lit-html?module';

import IMDInfoCard from '/src/components/IMDInfoCard.js'
import Button from '/src/components/Button.js'
import ArrowButton from '/src/components/ArrowButton.js'

const Main = () => {
  return html`
    <style>
      .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 600px;
        height: 100%;

        margin: 0 auto;
      }

      .main__repo-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        margin-top: 32px;
      }

      .main__repo-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin: 0 12px;
      }
    </style>

    <main class="main">
      ${IMDInfoCard()}
      <section class="main__repo-container">
        ${ArrowButton({ direction: 'left' })}
        <section class="main__repo-list">
          ${Button({ text: 'repo name', styles: { marginRight: '10px' } })}
          ${Button({ text: 'repo name', styles: { marginRight: '10px' } })}
          ${Button({ text: 'repo name', styles: { marginRight: '10px' } })}
          ${Button({ text: 'repo name' })}
        </section>
        ${ArrowButton({})}
      </section>
    </main>
  `
};

export default Main