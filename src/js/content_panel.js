/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const $ = require('cash-dom');
const Pages = require('./pages.js');
const MainPage = require('./pages/main/index.js');
const LinkPage = require('./pages/link_page/index.js');

class ContentPanel {
  constructor() {
    this.hash = Pages.detectCurrentPage();
  }

  updateVisibility() {
    $(`.${Pages.PAGES.join(', .')}`).removeClass('focus');
    $(`.${this.hash}`).addClass('focus');
  }

  updatePage() {
    this.updateVisibility();
  }

  setUpHashListener() {
    return $(window).on('hashchange', () => {
      this.hash = Pages.detectCurrentPage();
      this.updatePage();
    });
  }

  bootstrap() {
    this.setUpHashListener();
    this.updatePage();

    const linkGroups = [
      {
        "name": "Work",
        "links": [
          ['http://canvas.ust.hk/', 'Canvas'],
          ['http://outlook.com/', 'Outlook'],
          ['http://o365.ust.hk/', 'HKUST Email'],
          ['http://mail.ck2ustudio.com/', 'Ck2uStudio Email'],
          ['https://github.com/tommyku', 'GitHub']
        ],
      },
      {
        "name": "Fun",
        "links": [
          ['http://reddit.com/', 'Reddit'],
          ['http://www.nicovideo.jp', 'NicoNico'],
          ['https://youtube.com', 'YouTube'],
          ['http://share.dmhy.org/', 'DMHY'],
          ['http://www.bilibili.com/', 'bilibili']
        ]
      }
    ];

    (new MainPage).render();

    for (const linkGroup of linkGroups) {
      (new LinkPage(linkGroup.name, linkGroup.links)).render();
    }
  }
}

module.exports = ContentPanel;
