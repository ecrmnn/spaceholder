module.exports = {
  providers: {
    LoremPixel: require('./providers/LoremPixel'),
    PlaceholdIt: require('./providers/PlaceholdIt'),
    PlaceImg: require('./providers/PlaceImg'),
    DummyImage: require('./providers/DummyImage'),
    UnsplashIt: require('./providers/UnsplashIt')
  },

  provider: 'random',

  getProvider: function () {
    'use strict';

    if (this.provider === 'random') {

      var providers = Object.keys(this.providers);
      var index = Math.floor(Math.random() * providers.length);

      return providers[index];
    }

    return this.provider;
  },

  setProvider: function (provider) {
    'use strict';

    this.provider = provider;
  },

  getImageUrl: function (size) {
    'use strict';

    return this.providers[this.getProvider()].getImageUrl(size);
  }
};