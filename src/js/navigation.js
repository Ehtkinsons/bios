const $ = require('cash-dom');
const Pages = require('./pages.js');

// would've been much easier if we had React
class Navigation {
  constructor(data) {
    this.pages = new Pages(data);
    this.pageCount = this.pages.pages.length;
    this.data = data;
  }

  getCurrentPagePosition() {
    const pageHash = this.pages.detectCurrentPage();
    return this.pages.pages.indexOf(pageHash);
  }

  goToNextPage() {
    const nextPagePosition = (this.getCurrentPagePosition()+1) % this.pageCount;
    window.location.hash = this.pages.pages[nextPagePosition];
  }

  goToPreviousPage() {
    const previousPagePosition = ((this.getCurrentPagePosition()-1)+this.pageCount) % this.pageCount;
    window.location.hash = this.pages.pages[previousPagePosition];
  }

  buildNav() {
    $('#nav').append(`<li class="main"><a href="#main">Main</a></li>`);

    for (const linkGroup of this.data.linkGroups) {
      $('#nav').append(`<li class="${linkGroup.name}"><a href="#${linkGroup.name}">${linkGroup.name}</a></li>`);
    }
  }

  setUpNavNavigation() {
    $(document).on('keydown', e=> {
      switch (e.key) {
        case 'ArrowRight': return this.goToNextPage();
        case 'ArrowLeft': return this.goToPreviousPage();
      }
    });
  }

  setUpLinkNavigation() {
    $(document).on('keydown', e=> {
      switch (e.key) {
        case 'ArrowUp': return this.goToPreviousElement();
        case 'ArrowDown': return this.goToNextElement();
      }
    });
  }

  goToPreviousElement() {
    let $prevFocus;
    const pageHash = this.pages.detectCurrentPage();
    const $contentSection = $(`section#${pageHash}`);
    const $currentFocus = $contentSection.children('.focus');
    if ($currentFocus[0] != null) {
      $prevFocus = $($currentFocus[0]).prev();
    } else {
      $prevFocus = $($contentSection.children('.nav')[0]);
    }
    if (($prevFocus.length !== 0) && $prevFocus.hasClass('nav')) {
      $contentSection.children('.focus').removeClass('focus');
      $prevFocus.addClass('focus');
      $prevFocus.get(0).focus();
    }
  }

  goToNextElement() {
    let $nextFocus;
    const pageHash = this.pages.detectCurrentPage();
    const $contentSection = $(`section#${pageHash}`);
    const $currentFocus = $contentSection.children('.focus');
    if ($currentFocus[0] != null) {
      $nextFocus = $($currentFocus[0]).next();
    } else {
      $nextFocus = $($contentSection.children('.nav')[0]);
    }
    if (($nextFocus.length !== 0) && $nextFocus.hasClass('nav')) {
      $contentSection.children('.focus').removeClass('focus');
      $nextFocus.addClass('focus');
      $nextFocus.get(0).focus();
    }
  }

  bootstrap() {
    this.buildNav();
    this.setUpNavNavigation();
    this.setUpLinkNavigation();
  }
}

module.exports = Navigation;
