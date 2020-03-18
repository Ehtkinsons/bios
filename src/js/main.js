const $ = require('cash-dom');
const ContentPanel = require('./content_panel.js');
const Navigation = require('./navigation.js');
require('../css/app.scss');

const data = {
  "linkGroups": [
    {
      "name": "work",
      "links": [
        ['http://canvas.ust.hk/', 'Canvas'],
        ['http://outlook.com/', 'Outlook'],
        ['http://o365.ust.hk/', 'HKUST Email'],
        ['http://mail.ck2ustudio.com/', 'Ck2uStudio Email'],
        ['https://github.com/tommyku', 'GitHub']
      ],
    },
    {
      "name": "fun",
      "links": [
        ['http://reddit.com/', 'Reddit'],
        ['http://www.nicovideo.jp', 'NicoNico'],
        ['https://youtube.com', 'YouTube'],
        ['http://share.dmhy.org/', 'DMHY'],
        ['http://www.bilibili.com/', 'bilibili']
      ]
    }
  ]
};

$(function() {
  (new Navigation(data)).bootstrap();
  (new ContentPanel(data)).bootstrap();
});
