const $ = require('cash-dom');
const ContentPanel = require('./content_panel.js');
const Navigation = require('./navigation.js');
require('../css/app.scss');

$(function() {
  (new ContentPanel()).bootstrap();
  (new Navigation()).bootstrap();
});
