import { html, render } from 'https://unpkg.com/lit-html?module';

import IMDInfoCard from '/src/components/IMDInfoCard.js'
import Button from '/src/components/Button.js'
import ArrowButton from '/src/components/ArrowButton.js'
import RepoCard from '/src/components/RepoCard.js'

const repoBtnClick = (repoInfo) => {
  state.currentRepo = { ...repoInfo }
  const target = document.querySelector(".main__repo-card-container")
  const result = RepoCard({
    name: repoInfo.name,
    url: repoInfo.url,
    description: repoInfo.description
  })
  render(result, target);
}

const state = {
  repoList: [
    {
      "name": "Dev-Docs",
      "description": "내가 일주일간 공부하거나 알게된 내용을 공유하는 공간 📱",
      "updatedAt": "2020-11-22T07:18:38Z",
      "url": "https://github.com/im-d-team/Dev-Docs"
    },
    {
      "name": "Dev-Contents-House",
      "description": ":house: Dev-Contents-House",
      "updatedAt": "2020-11-21T02:33:26Z",
      "url": "https://github.com/im-d-team/Dev-Contents-House"
    },
    {
      "name": "Algorithm",
      "description": "🧩Let's study Alogrithm!",
      "updatedAt": "2020-11-18T07:06:35Z",
      "url": "https://github.com/im-d-team/Algorithm"
    }
  ],
  currentRepo: {
    "name": "Dev-Docs",
    "description": "내가 일주일간 공부하거나 알게된 내용을 공유하는 공간 📱",
    "updatedAt": "2020-11-22T07:18:38Z",
    "url": "https://github.com/im-d-team/Dev-Docs"
  }
}

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

      .main__repo-card-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;

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
        <!-- ${ArrowButton({ direction: 'left' })} -->
        <section class="main__repo-list">
          ${state.repoList.map((repo, idx) => {
            const styles = {}
            if (state.repoList.length - 1 !== idx) {
              styles['marginRight'] = '10px'
            }

            return Button({ text: repo.name, styles, callback: () => repoBtnClick(repo)})
          })}
        </section>
        <!-- ${ArrowButton({})} -->
      </section>

      <section class="main__repo-card-container">
        ${RepoCard({
          name: state.currentRepo.name,
          url: state.currentRepo.url,
          description: state.currentRepo.description
        })}
      </section>
    </main>
  `
};

export default Main