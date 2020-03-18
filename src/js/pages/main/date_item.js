const Item = require('../../item.js');

class DateItem extends Item {
  formatedDate() {
    const d = new Date;
    return `${this.lo(d.getDate())}/${this.lo(d.getMonth())}/${d.getFullYear()}`;
  }

  lo(d){
    if (d > 10) { return d.toString(); } else { return `0${d}`; }
  }

  html() {
    return `\
<a class='nav'>
  System Date
  <time style='margin-left: 4rem;'>[${this.formatedDate()}]</time>
</a>\
`;
  }
}

module.exports = DateItem;
