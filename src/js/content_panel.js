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
  constructor(data) {
    this.pages = new Pages(data);
    this.hash = this.pages.detectCurrentPage();
    this.data = data;
  }

  buildContent() {
    $('#content').append(`<section id="main"></section>`);

    for (const linkGroup of this.data.linkGroups) {
      $('#content').append(`<section id="${linkGroup.name}"></section>`);
    }
  }

  updateVisibility() {
    $(`#nav`).children().removeClass('focus');
    $(`.${this.hash}`).addClass('focus');
  }

  setUpHashListener() {
    $(window).on('hashchange', () => {
      this.hash = this.pages.detectCurrentPage();
      this.updateVisibility();

    });

    // Hack to make the content panel load :target CSS.
    window.location.hash = this.hash;
  }

  bootstrap() {
    this.buildContent();

    this.setUpHashListener();
    this.updateVisibility();

    (new MainPage).render();

    for (const linkGroup of this.data.linkGroups) {
      (new LinkPage(linkGroup.name, linkGroup.links)).render();
    }
  }
}

module.exports = ContentPanel;
