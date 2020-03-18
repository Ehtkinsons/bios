const Page = require('../../page.js');

class LinkPage extends Page {
  constructor(name, urls) {
    super();

    this.name = name;

    this.collection = urls.map(item=> {
      return {
        html() {
          return `<a class='nav' href='${item[0]}'>${item[1]} <span style='color: #555555;'>${item[0]}</span></a>`;
        }
      };
    });
  }
}

module.exports = LinkPage;
