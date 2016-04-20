var chai = require('chai');
var expect = require('chai').expect;
var execa = require('execa');
var helpers = require('./helpers');
var Image = require('../image/Image');

describe('CLI: spaceholder', function () {
  'use strict';

  before(function (done) {
    helpers.deleteSpaceholders()
      .then(function (response) {
        done();
      });
  });

  var result;

  before(function (done) {
    execa.shell('node ./index.js')
      .then(function (response) {
        result = response.stdout;
        done();
      })
      .catch(function (error) {
        console.log(error);
        done();
      });
  });

  it('should generate one image with default dimensions', function () {
    var dimensions = helpers.getDimensions(helpers.getSpaceholders()[0]);
    expect(dimensions).to.be.equal('1024x768');
  });
});

describe('CLI: spaceholder -n 3', function () {
  'use strict';

  before(function (done) {
    helpers.deleteSpaceholders()
      .then(function (response) {
        done();
      });
  });

  var result;

  before(function (done) {
    execa.shell('node ./index.js -n 3')
      .then(function (response) {
        result = response.stdout;
        done();
      })
      .catch(function (error) {
        console.log(error);
        done();
      });
  });

  it('should generate three images', function () {
    expect(helpers.getSpaceholders().length).to.be.equal(3);
  });

  it('should have default dimensions', function () {
    var dimensions = helpers.getDimensions(helpers.getSpaceholders()[Math.floor(Math.random() * 2) + 0]);
    expect(dimensions).to.be.equal('1024x768');
  });
});

describe('CLI: spaceholder -s 100x100', function () {
  'use strict';

  before(function (done) {
    helpers.deleteSpaceholders()
      .then(function (response) {
        done();
      });
  });

  var result;

  before(function (done) {
    execa.shell('node ./index.js -s 100x100')
      .then(function (response) {
        result = response.stdout;
        done();
      })
      .catch(function (error) {
        console.log(error);
        done();
      });
  });

  it('should generate one image', function () {
    expect(helpers.getSpaceholders().length).to.be.equal(1);
  });

  it('should be 100x100', function () {
    var dimensions = helpers.getDimensions(helpers.getSpaceholders()[0]);
    expect(dimensions).to.be.equal('100x100');
  });
});

describe('CLI: Usage and information', function () {
  'use strict';

  var result;

  before(function (done) {
    execa.shell('node ./index.js -v')
      .then(function (response) {
        result = response.stdout;
        done();
      })
      .catch(function (error) {
        console.log(error);
        done();
      });
  });

  it('should return the same version as package.json', function () {
    expect(result).to.be.equal(helpers.getPackageJson().version);
  });

  var result2;

  before(function (done) {
    execa.shell('node ./index.js -h')
      .then(function (response) {
        result2 = response.stdout;
        done();
      })
      .catch(function (error) {
        console.log(error);
        done();
      });
  });

  Object.keys(Image.providers).forEach(function (provider) {
    it('help should contain all providers (' + provider + ')', function () {
      expect(result2.indexOf(provider)).not.to.be.equal(-1);
    });
  });
});