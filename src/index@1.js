import { html } from 'https://unpkg.com/lit-html?module';

import Header from 'https://im-d.github.io/Im-Infographic-FE/src/components/Header@1.js'
import Main from 'https://im-d.github.io/Im-Infographic-FE/src/components/Main@1.js'

const createReviewerCardList = (prList) => {
  return Object.values(prList.reduce((acc, prInfo) => {
    prInfo.reviewRequests.nodes.map(({ requestedReviewer }) => {
      if (!acc[requestedReviewer.id]) {
        acc[requestedReviewer.id] = { ...requestedReviewer, prList: [prInfo] }
      } else {
        acc[requestedReviewer.id] = { ...requestedReviewer, prList: [...acc[requestedReviewer.id].prList, prInfo] }
      }
    })
    return acc
  }, {}))
}

export default ({ author, imd_info, imd_repos, pr, pr_next_step }) => {
  const headerState = {
    authorCnt: Object.keys(author).length,
    starCnt: imd_repos.repos.reduce((acc, { stargazerCount }) => acc + stargazerCount, 0)
  }

  const mainState = {
    repoList: imd_repos.repos,
    reviewerCardList: createReviewerCardList(pr.prList),
    reviewerCardListNextStep : createReviewerCardList(pr_next_step.prList),
    dateCardList: pr.prList,
    dateCardListNextStep: pr_next_step.prList,
  }

  return html`
    ${Header(headerState)}
    ${Main(mainState)}
  `;
}