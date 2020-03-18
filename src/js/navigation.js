const $ = require('cash-dom');
const Pages = require('./pages.js');

// would've been much easier if we had React
class Navigation {
  constructor() {
    this.pageCount = Pages.PAGES.length;
  }

  getCurrentPagePosition() {
    const pageHash = Pages.detectCurrentPage();
    return Pages.PAGES.indexOf(pageHash);
  }

  goToNextPage() {
    const nextPagePosition = (this.getCurrentPagePosition()+1) % this.pageCount;
    window.location.hash = Pages.PAGES[nextPagePosition];
  }

  goToPreviousPage() {
    const previousPagePosition = ((this.getCurrentPagePosition()-1)+this.pageCount) % this.pageCount;
    window.location.hash = Pages.PAGES[previousPagePosition];
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
    const pageHash = Pages.detectCurrentPage();
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
    const pageHash = Pages.detectCurrentPage();
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
    this.setUpNavNavigation();
    this.setUpLinkNavigation();
  }
}

module.exports = Navigation;
