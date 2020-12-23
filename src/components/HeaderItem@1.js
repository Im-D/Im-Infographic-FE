import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map.js?module';

const headerLink = {
  'id-card':'https://github.com/im-d-team/Dev-Docs/graphs/contributors',
  'star':'https://github.com/im-d-team/Dev-Docs/stargazers',
  'notepad':'https://github.com/im-d-team/Dev-Docs',
  'link':'https://github.com/im-d-team/Dev-Contents-House'
}

const Convertor = (linkList) => (name) => linkList[name] ? linkList[name] :  '#'
const headerLinkConvertor = Convertor(headerLink)

export default ({ name, size = 24, styles = {}, data = '' }) => html`
  <a class="header-item" style="${styleMap(styles)}" href="${headerLinkConvertor(name)}" target="_blank">
    <style>
      .header-item{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
        cursor: pointer;
      }
      .header-item__icon { 
        width: ${size}px;
        height: ${size}px;
        cursor: pointer;
      }
      .header-item__text{
        font-size: 14px;
        margin-left: 4px;
      }
    </style> 

    <object 
      id="${name}" 
      class="header-item__icon" 
      data="https://process.im-d.dev/Im-Infographic-FE/assets/icons/${name}.svg" 
      type="image/svg+xml">
    </object>
    <span class="header-item__text">${data}</span>
  </a>
`;
