const $ = require('cash-dom');
const ContentPanel = require('./content_panel.js');
const Navigation = require('./navigation.js');
require('../css/app.scss');

const storage = new CustomStartStorage();

storage.get()
  .then(data => {
    (new Navigation(data)).bootstrap();
    (new ContentPanel(data)).bootstrap();
  });
