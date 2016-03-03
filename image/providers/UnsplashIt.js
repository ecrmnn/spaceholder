module.exports = {
  getImageUrl: function (size) {
    'use strict';

    var pieces = size.split('x');

    return 'https://unsplash.it/' + pieces[0] + '/' + pieces[1];
  }
};