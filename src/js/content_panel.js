/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const $ = require('cash-dom');
const Pages = require('./pages.js');
const MainPage = require('./pages/main/index.js');
const FunPage = require('./pages/fun/index.js');
const WorkPage = require('./pages/work/index.js');

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
    (new MainPage).render();
    (new FunPage).render();
    (new WorkPage).render();
  }
}

module.exports = ContentPanel;
