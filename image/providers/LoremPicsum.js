module.exports = {
  getImageUrl: function (size) {
    'use strict';

    var pieces = size.split('x');

    return 'https://picsum.photos/' + pieces[0] + '/' + pieces[1] + '/?random';
  }
};