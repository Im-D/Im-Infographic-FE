import { html } from 'https://unpkg.com/lit-html?module';

import IMDInfo from './IMDInfo.js'
import Button from './Button.js'
import ArrowButton from './ArrowButton.js'

const Main = () => {
  return html`
    <style>
      .main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;
      }

      .main__repo-buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        margin-top: 32px;
      }
    </style>

    <main class="main">
      ${IMDInfo()}
      <section class="main__repo-buttons">
        ${ArrowButton({direction: 'left'})}
        ${Button({text: 'repo name', callback: () => {console.log('click')}})}
        ${Button({text: 'repo name'})}
        ${Button({text: 'repo name'})}
        ${Button({text: 'repo name'})}
        ${ArrowButton({})}
      </section>
    </main>
  `
};

export default Main