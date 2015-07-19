module.exports = {
  getImageUrl: function (size) {
    'use strict';

    var pieces = size.split('x');

    return 'http://placeimg.com/' + pieces[0] + '/' + pieces[1] + '/any';
  }
};