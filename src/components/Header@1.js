import { html } from 'https://unpkg.com/lit-html?module';

import HeaderItem from 'https://im-d.github.io/Im-Infographic-FE/src/components/HeaderItem@1.js'
import Logo from 'https://im-d.github.io/Im-Infographic-FE/src/components/Logo@1.js'

const Header = ({authorCnt, starCnt}) => {
  const itemStyles = {
    marginRight: '12px'
  }

  return html`
    <style>
      .header{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        height: 54px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      }

      .header__contents{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        position: relative;

        width: 100%;
        max-width: 600px;
        
        margin: 0 auto;
        padding: 0 12px;
      }

      .header__left-side{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .header__middle-side{
        display: flex;
        position: absolute;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        margin: 0 auto;
      }

      .header__right-side{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    </style>

    <header class="header">
      <section class="header__contents">
        <section class="header__left-side">
          ${HeaderItem({ name: 'id-card', data: authorCnt, styles: itemStyles })}
          ${HeaderItem({ name: 'star', data: starCnt })}
        </section>
        <section class="header__middle-side">
          ${Logo()}
        </section>
        <section class="header__right-side">
          ${HeaderItem({ name: 'notepad', data: '-', styles: itemStyles })}
          ${HeaderItem({ name: 'link', data: '-' })}
        </section>
      </section>
    </header>
  `
};

export default Header