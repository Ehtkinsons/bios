const $ = require('cash-dom');

class Page {
  constructor() {
  }

  render() {
    $(`section#${this.name}`).empty();

    this.collection.forEach(item=> {
      $(`section#${this.name}`).append(item.html());
    });
  }
}

module.exports = Page;
