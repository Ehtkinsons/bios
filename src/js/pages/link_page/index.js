const Page = require('../../page.js');

class LinkPage extends Page {
  constructor(name, links) {
    super();

    this.name = name;

    this.collection = links.map(link=> {
      return {
        html() {
          return `<a class='nav' href='${link.url}'>${link.name} <span style='color: #555555;'>${link.url}</span></a>`;
        }
      };
    });
  }
}

module.exports = LinkPage;
