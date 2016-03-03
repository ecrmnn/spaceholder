# spaceholder
> Download placeholder images from public domain sources

[![Build Status](https://travis-ci.org/ecrmnn/spaceholder.svg?branch=master)](https://travis-ci.org/ecrmnn/spaceholder)
[![npm version](https://img.shields.io/npm/v/spaceholder.svg)](http://badge.fury.io/js/spaceholder)
[![npm version](https://img.shields.io/npm/dm/spaceholder.svg)](http://badge.fury.io/js/spaceholder)
[![npm version](https://img.shields.io/npm/l/spaceholder.svg)](http://badge.fury.io/js/spaceholder)

### What is it?
Spaceholder makes it easy to download placeholder images when you need them.
Images are downloaded from LoremPixel.com, Placehold.it, PlaceIMG.com, Dummyimage.com, Unsplash.it.

### Installation
Spaceholder requires that you have Node.js installed on you computer
```bash
npm install -g spaceholder
```

### Usage
```bash
spaceholder
# Downloads 1 image (1024x768px) into current directory


spaceholder -n 100
# Downloads 100 images into current directory


spaceholder -s 800x600
# Downloads 1 image (800x600px) into current directory


spaceholder -n 50 -s 800x600 -p LoremPixel
# Downloads 50 images (800x600px) from LoremPixel into current directory
# If no --provider / -p is specified, each image is downloaded from a random provider
```

### Contributors
- [mrtnsn](https://github.com/mrtnsn)

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)