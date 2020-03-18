const Page = require('../../page.js');

class MainPage extends Page {
  constructor() {
    super();

    this.name = 'main';

    this.collection = ['date_item', 'time_item', 'stock_item'];

    this.collection = this.collection.map(item=> {
      return new (require(`./${item}.js`));
    });
  }
}

module.exports = MainPage;
