const Page = require('../../page.js');

class FunPage extends Page {
  constructor() {
    super();

    this.name = 'fun';

    this.urls = [
      ['http://reddit.com/', 'Reddit'],
      ['http://www.nicovideo.jp', 'NicoNico'],
      ['https://youtube.com', 'YouTube'],
      ['http://share.dmhy.org/', 'DMHY'],
      ['http://www.bilibili.com/', 'bilibili']
    ];

    this.collection = this.urls.map(item=> {
      return {
        html() {
          return `<a class='nav' href='${item[0]}'>${item[1]} <span style='color: #555555;'>${item[0]}</span></a>`;
        }
      };
  });
  }
}

module.exports = FunPage;
