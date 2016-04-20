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
    var spaceholders = this.getSpaceholders();
    var count = spaceholders.length;

    return new Promise(function (resolve, reject) {
      if (count) {
        spaceholders.forEach(function (filename) {
          fs.unlinkSync(filename);
          count--;

          if (!count) {
            resolve();
          }
        });
      }

      resolve();
    });
  },

  getDimensions: function (filename) {
    return filename.split('_')[1];
  }
};