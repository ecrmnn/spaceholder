var chai = require('chai');
var expect = require('chai').expect;
var execa = require('execa');
var helpers = require('./helpers');
var Image = require('../image/Image');

Object.keys(Image.providers).forEach(function (provider) {
  'use strict';

  describe('CLI, Provider: ' + provider + '. spaceholder -p ' + provider, function () {
    'use strict';

    before(function () {
      helpers.deleteSpaceholders();
    });

    var result;

    before(function (done) {
      execa.shell('node ./index.js -p ' + provider)
        .then(function (response) {
          result = response.stdout;
          done();
        })
        .catch(function (error) {
          console.log(error);
          done();
        });
    });

    it('should generate one image from specified provider (' + provider + ')', function () {
      expect(helpers.getSpaceholders().length).to.be.equal(1);
    });

    it('should have default dimensions', function () {
      var dimensions = helpers.getDimensions(helpers.getSpaceholders()[0]);
      expect(dimensions).to.be.equal('1024x768');
      helpers.deleteSpaceholders();
    });
  });
});