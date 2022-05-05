module.exports = {
  providers: {
    PlaceImg: require('./providers/PlaceImg'),
    DummyImage: require('./providers/DummyImage'),
    LoremPicsum: require('./providers/LoremPicsum'),
    FakeImg: require('./providers/FakeImg')
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