module.exports = {
  getImageUrl: function (size) {
    'use strict';

    var pieces = size.split('x');

    return 'http://placeholdit.imgix.net/~text?txtsize=40&txt=Spaceholder&w=' + pieces[0] + '&h=' + pieces[1];
  }
};