var fs = require('fs');
var program = require('commander');
var Image = require('./image/Image');

module.exports = program.version('1.10.1', '-v, --version')
  .option('-n, --number [integer]', 'Number of files to generate', function (numberString) {
    'use strict';

    var number = parseInt(numberString);

    if (isNaN(number)) {
      return 1;
    }

    return number;
  }, 1)
  .option('-s, --size [1024x768]', 'Image size', function (size) {
    'use strict';

    if (size.indexOf('x') === -1) {
      return '1024x768';
    }

    return size;

  }, '1024x768')
  .option('-p, --provider [provider]', 'Set the image provider; ' + Object.keys(Image.providers).join(', '),
    function (provider) {
      'use strict';

      Image.setProvider(provider);

      return provider;

    }, Image.setProvider('random'))
  .parse(process.argv);