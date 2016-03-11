module.exports = {
  getImageUrl: function (size) {
    'use strict';

    var pieces = size.split('x');

    return 'http://fakeimg.pl/' + pieces[0] + 'x' + pieces[1] + '/384f66/ecf0f1/?text=Spaceholder&font=lobster';
  }
};