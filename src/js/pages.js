class Pages {
  static initClass() {
    this.PAGES = ['main', 'work', 'fun'];
  }

  static detectCurrentPage() {
    let hash;
    if (window.location.hash) {
      hash = window.location.hash.substring(1);
      if (this.PAGES.indexOf(hash) !== -1) {
        return hash;
      }
    }
    hash = (window.location.hash = this.PAGES[0]);
    return hash;
  }
}
Pages.initClass();

module.exports = Pages;
