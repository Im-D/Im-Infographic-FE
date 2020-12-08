require('dotenv').config();
const fs = require('fs')
const { Octokit } = require("@octokit/rest");
const { sendSlack } = require('./slackNoti');

const encodeBase64 = (contents) => Buffer.from(contents).toString('base64')
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const zeroPrefix = (num) => (('0' + num).slice(-2))

const createContents = (date) => {
  const fileName = `${date.getFullYear()}${zeroPrefix(date.getMonth() + 1)}${zeroPrefix(date.getDate())}`
  return `<!DOCTYPE html>
  <html lang="ko">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IMD Process Site</title>
    <link rel="stylesheet" href="https://im-d.github.io/Im-Infographic-FE/style@1.css">
  </head>

  <body />

  <script type="module">
    import { render } from 'https://unpkg.com/lit-html?module';
    import APP from 'https://im-d.github.io/Im-Infographic-FE/src/index@1.js';

    const fetchAuthor = fetch('https://im-d.github.io/Im-Infographic-BE/data/author/${fileName}.json').then(res => res.json())
    const fetchIMDInfo = fetch('https://im-d.github.io/Im-Infographic-BE/data/imd_info/${fileName}.json').then(res => res.json())
    const fetchIMDRepos = fetch('https://im-d.github.io/Im-Infographic-BE/data/imd_repos/${fileName}.json').then(res => res.json())
    const fetchPR = fetch('https://im-d.github.io/Im-Infographic-BE/data/pr/${fileName}.json').then(res => res.json())

    Promise.all([fetchAuthor, fetchIMDInfo, fetchIMDRepos, fetchPR])
      .then(([author, imd_info, imd_repos, pr]) => {
        const state = {
          author, 
          imd_info,
          imd_repos,
          pr
        }
        render(APP(state), document.body);
      })
  </script>

  </html>
 `
}

const checkDirExist = (dirPath) => {
  try {
    fs.statSync(`${dirPath}`)
  } catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(`${dirPath}`)
      console.log(`Create Dir ${dirPath}`)
    }
  }
}

const writeFile = ({ path = '', fileName = '', contents = '' }) => {
  const filePath = `${path}/${fileName}.html`
  checkDirExist(process.env.DATA_DIR)
  checkDirExist(path)
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
  }
  return fs.writeFileSync(filePath, contents)
}

const creatCommit = async ({ path, fileName, contents }) => {
  if (process.env.NODE_ENV === 'develop') {
    writeFile({ path, fileName, contents })
  } else {
    try {
      await octokit.repos.createOrUpdateFileContents({
        owner: process.env.OWNER,
        repo: process.env.REPO_NAME,
        path: `${path}/${fileName}.html`,
        message: `create : ${path}/${fileName}.html`,
        content: encodeBase64(contents),
        committer: {
          name: process.env.USER_NAME,
          email: process.env.USER_EMAIL
        },
        author: {
          name: process.env.USER_NAME,
          email: process.env.USER_EMAIL
        }
      })

      await sendSlack(now, `${path}/${fileName}`)

      console.log(`Success ${path}/${fileName}.html`)
    } catch (e) {
      console.log(`Error ${e} / ${path}/${fileName}.html`)
    }
  }
}

const now = new Date()
now.setHours(now.getHours() + 9)

const commitData = {
  path: `${process.env.DATA_DIR}/${now.getFullYear()}`,
  fileName: `${zeroPrefix(now.getMonth() + 1)}${zeroPrefix(now.getDate())}`,
  contents: createContents(now)
}

creatCommit(commitData)