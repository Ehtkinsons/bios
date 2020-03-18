const Page = require('../../page.js');

class WorkPage extends Page {
  constructor() {
    super();

    this.name = 'work';

    this.urls = [
      ['http://canvas.ust.hk/', 'Canvas'],
      ['http://outlook.com/', 'Outlook'],
      ['http://o365.ust.hk/', 'HKUST Email'],
      ['http://mail.ck2ustudio.com/', 'Ck2uStudio Email'],
      ['https://github.com/tommyku', 'GitHub']
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

module.exports = WorkPage;
