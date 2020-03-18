class Pages {
  constructor(data) {
    this.pages = ['main'];

    for (const linkGroup of data.linkGroups) {
      this.pages.push(linkGroup.name);
    }
  }

  detectCurrentPage() {
    let hash;
    if (window.location.hash) {
      hash = window.location.hash.substring(1);
      if (this.pages.indexOf(hash) !== -1) {
        return hash;
      }
    }
    hash = (window.location.hash = this.pages[0]);
    return hash;
  }
}

module.exports = Pages;
