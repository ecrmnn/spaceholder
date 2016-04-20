var fs = require('fs');

module.exports = {
  getRootFiles: function () {
    return fs.readdirSync('./');
  },

  getSpaceholders: function () {
    var files = this.getRootFiles();

    return files.filter(function (filename) {
      if (filename.indexOf('spaceholder_') !== -1) {
        return filename
      }
    });
  },

  getPackageJson: function () {
    return JSON.parse(fs.readFileSync('./package.json').toString());
  },

  deleteSpaceholders: function () {
    this.getSpaceholders().forEach(function (filename) {
      fs.unlink(filename);
    });
  },

  getDimensions: function (filename) {
    return filename.split('_')[1];
  }
};