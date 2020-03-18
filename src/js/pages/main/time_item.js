const Item = require('../../item.js');

class TimeItem extends Item {
  formatedTime() {
    const d = new Date;
    return `${this.lo(d.getHours())}:${this.lo(d.getMinutes())}`;
  }

  lo(d){
    if (d > 10) { return d.toString(); } else { return `0${d}`; }
  }

  html() {
    return `\
<a class='nav'>
  System Time
  <time style='margin-left: 4rem;'>[${this.formatedTime()}]</time>
</a>\
`;
  }
}

module.exports = TimeItem;
