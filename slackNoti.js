const { IncomingWebhook } = require('@slack/webhook');
require('dotenv').config();

const zeroPrefix = (num) => (('0' + num).slice(-2))
const url = process.env.SLACK_WEBHOOK_URL;

const webhook = new IncomingWebhook(url);
const titleList = [
  '리뷰도 안해놓고 밥이 넘어가니?',
  '리뷰는 했...니..?:rage:',
  '점심시간이에여 여러분!! 리뷰를 하고 밥을 먹는건 어떨까요?',
  '오늘도 리뷰 안남겼어요?',
  '리뷰 좀 남겨주세요...',
  '혹시 까먹은거 없어요? 리뷰 안했자나요!',
  '당신 때문에 Merge가 안되고 있어요! :rage:'
]

// Send the notification
exports.sendSlack = async (date, path) => {
  try {
    const now = `${date.getFullYear()}년 ${zeroPrefix(date.getMonth() + 1)}월 ${zeroPrefix(date.getDate())}일`
    await webhook.send({
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `@here # *${titleList[Math.floor(Math.random() * titleList.length)]}*`
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `:imd: 오늘은 *${now}* 입니다.
사이트를 확인하고 PR 처리해주세요.

아래의 버튼을 누르면 바로 이동이 가능합니다.
  - 오늘의 사이트 : *${now}* 기준 PR 확인하러 가기
  - Dev-Contents-House : 최신 올라온 Reference 보러가기
            `
          },
          "accessory": {
            "type": "image",
            "image_url": "https://avatars1.githubusercontent.com/u/45911353?s=200&v=4",
            "alt_text": "IMD"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "오늘의 사이트",
                "emoji": true
              },
              "value": "오늘의 사이트",
              "url": `https://process.im-d.dev/${path}.html`
            },
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Dev-Contents-House",
                "emoji": true
              },
              "value": "Dev-Contents-House",
              "url": "https://github.com/im-d-team/Dev-Contents-House"
            }
          ]
        }
      ]
    })();
  } catch (e) {
    console.log(e)
  }
}
