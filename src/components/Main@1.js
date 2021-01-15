import { html, render } from 'https://unpkg.com/lit-html?module';

import IMDInfoCard from 'https://im-d.github.io/Im-Infographic-FE/src/components/IMDInfoCard@1.js'
import Button from 'https://im-d.github.io/Im-Infographic-FE/src/components/Button@1.js'
import ArrowButton from 'https://im-d.github.io/Im-Infographic-FE/src/components/ArrowButton@1.js'
import RepoCard from 'https://im-d.github.io/Im-Infographic-FE/src/components/RepoCard@1.js'
import Switch from 'https://im-d.github.io/Im-Infographic-FE/src/components/Switch@1.js'

import ReviewerCard from 'https://im-d.github.io/Im-Infographic-FE/src/components/ReviewerCard@1.js'
import DateCard from 'https://im-d.github.io/Im-Infographic-FE/src/components/DateCard@1.js'

const ReviewerCardList = (reviewerCardList) =>
  html`
    ${reviewerCardList.map((reviewerCardInfo, idx) =>
    ReviewerCard({ idx: idx + 1, ...reviewerCardInfo })
  )}
  `

const DateCardList = (dateCardList) =>
  html`
    ${dateCardList.map((dateCardInfo, idx) =>
    DateCard({ idx: idx + 1, name: dateCardInfo.author.name, reviewers: dateCardInfo.reviewRequests.nodes, ...dateCardInfo })
  )}
  `

const repoButtonList = ['Dev-Docs', 'Next-Step']
const buttonList = ['User 정렬', 'Date 정렬']
const switchList = [ReviewerCardList, DateCardList]

const Main = ({ repoList, reviewerCardList = [], reviewerCardListNextStep = [], dateCardList = [], dateCardListNextStep = [] }) => {
  let currentRepo = repoList[0];
  let switchState = {
    repoIndex: 0,
    alignIndex: 0,
  }
  const getCurrentCardList = ({ repoIndex = 0, alignIndex = 0 }) => {
    const currentCardObj = {
      '0,0': reviewerCardList,
      '0,1': dateCardList,
      '1,0': reviewerCardListNextStep,
      '1,1': dateCardListNextStep,
    }

    return currentCardObj[`${repoIndex},${alignIndex}`];
  }

  const changeCard = ({ repoIndex = 0, alignIndex = 0 }) => {
    switchState = {
      repoIndex,
      alignIndex,
    };
    const currentCardList = getCurrentCardList({ repoIndex, alignIndex })
    console.log(currentCardList);
    render(switchList[alignIndex](currentCardList), document.querySelector(".main_pr-list"))
  }

  const repoBtnClick = (repoInfo) => {
    const result = RepoCard({
      name: repoInfo.name,
      url: repoInfo.url,
      description: repoInfo.description,
      stars: repoInfo.stargazerCount,
      forks: repoInfo.forkCount,
    })

    currentRepo = { ...repoInfo }
    render(result, document.querySelector(".main__repo-card-container"));
  }

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

        margin: 0 auto 32px;
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
        justify-content: flex-start;
        align-items: center;
        min-width: 320px;

        overflow: auto;

        padding: 0 12px;
        box-sizing: border-box;
      }

      .main__pr-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        margin-top: 60px;
      }
      
      .main_pr-switch{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
      }

      .main_pr-list{
        width: 100%;
        height: 472px;

        margin-top: 12px;
        padding: 12px;

        overflow: auto;
        -ms-overflow-style: none;

        border-radius: 4px;
        box-sizing: border-box;
        /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2); */

        /* background: 
          linear-gradient(#fff 33%, rgba(249,206,192, 0)),
          linear-gradient(rgba(249,206,192, 0), #fff 66%) 0 100%,
          radial-gradient(farthest-side at 50% 0, rgba(34,34,34, 0.5), rgba(0,0,0,0)),
          radial-gradient(farthest-side at 50% 100%, rgba(34,34,34, 0.5), rgba(0,0,0,0)) 0 100%; */
        background-color: #fff;
        background-repeat: no-repeat;
        background-attachment: local, local, scroll, scroll;
        background-size: 100% 45px, 100% 45px, 100% 15px, 100% 15px;
      }
    </style>

    <main class="main">
      ${IMDInfoCard()}
      <section class="main__repo-container">
        <!-- ${ArrowButton({ direction: 'left' })} -->
        <section class="main__repo-list">
          ${repoList.map((repo, idx) => {
            const styles = {}
            if (repoList.length - 1 !== idx) {
              styles['marginRight'] = '10px'
            }

            return Button({ text: repo.name, styles, callback: () => repoBtnClick(repo) })
          })}
        </section>
        <!-- ${ArrowButton({})} -->
      </section>

      <section class="main__repo-card-container">
        ${RepoCard({
          name: currentRepo.name,
          url: currentRepo.url,
          description: currentRepo.description,
          stars: currentRepo.stargazerCount,
          forks: currentRepo.forkCount,
        })}
      </section>

      <section class="main__pr-container">
        <section class="main_pr-switch">
          ${Switch({ type: 'repo', buttonList: repoButtonList, callback: idx => changeCard({ ...switchState, repoIndex: idx }) })}
          ${Switch({ type: 'align', buttonList, callback: idx => changeCard({ ...switchState, alignIndex: idx }) })}
        </section>
        <section class="main_pr-list">
          ${ReviewerCardList(reviewerCardList)}
        </section>
      </section>
    </main>
  `
};

export default Main