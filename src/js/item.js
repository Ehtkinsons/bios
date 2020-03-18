class Item {
  constructor() {
    this.url = 'http://localhost';
    this.text = 'localhost';
  }

  html() {
    return `<a href='${this.url}'>${this.text}</a>`;
  }
}

module.exports = Item;
