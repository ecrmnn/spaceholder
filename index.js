#! /usr/bin/env node

var http = require('follow-redirects').http;
var https = require('follow-redirects').https;
var fs = require('fs');
var random = require('random-string');
var Image = require('./image/Image');
var readline = require('readline');

/* Require Commander configuration */
var program = require('./commanderConfig');

var createdFilesCount = 0;
var createdFiles = [];

var download = function (url, dest) {
  'use strict';

  var file = fs.createWriteStream(dest);

  var handleResponse = function (response) {
    response.pipe(file);
    file.on('finish', function () {
      file.close(function () {
        'use strict';

        createdFilesCount++;
        createdFiles.push(dest);

        var percentage = Math.ceil((createdFilesCount / program.number * 100));

        readline.cursorTo(process.stdout, 0);
        process.stdout.write('Downloaded ' + createdFilesCount + ' of ' + program.number + '. [' + percentage + ' %]');

        if (createdFilesCount === program.number) {
          console.info("\n" + program.number + ' image(s) successfully downloaded');
        }
      });
    });
    file.on('error', function () {
      console.log('Failed');
    })
  };

  if (url.substring(0, 7) === 'http://') {
    http.get(url, function (response) {
      handleResponse(response)
    });
  } else {
    https.get(url, function (response) {
      handleResponse(response)
    });
  }
};

var filename = function (iterator) {
  'use strict';

  return 'spaceholder_' + program.size + '_' + random({length: 4}) + iterator + random({length: 4}) + '.jpg'
}

for (i = 1; i <= program.number; i++) {
  download(Image.getImageUrl(program.size), filename(i));
}