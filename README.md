# <img src="https://raw.githubusercontent.com/ecrmnn/spaceholder/master/spaceholder.jpg" alt="Spaceholder">

> Download placeholder images from public domain sources blazingly fast

[![Travis](https://img.shields.io/travis/ecrmnn/spaceholder.svg?style=flat-square)](https://travis-ci.org/ecrmnn/spaceholder.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/spaceholder.svg?style=flat-square)](http://badge.fury.io/js/spaceholder)
[![npm downloads](https://img.shields.io/npm/dm/spaceholder.svg?style=flat-square)](http://badge.fury.io/js/spaceholder)
[![npm license](https://img.shields.io/npm/l/spaceholder.svg?style=flat-square)](http://badge.fury.io/js/spaceholder)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

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
```
```bash
spaceholder -n 100
# Downloads 100 images into current directory
```
```bash
spaceholder -s 800x600
# Downloads 1 image (800x600px) into current directory
```
```bash
spaceholder -n 50 -s 800x600 -p LoremPixel
# Downloads 50 images (800x600px) from LoremPixel into current directory
# If no --provider / -p is specified, each image is downloaded from a random provider
```

### Providers / Sources
- [Dummy Image](http://dummyimage.com)
- [FakeImg](fakeimg.pl)
- [Lorem Pixel](http://lorempixel.com)
- [PlaceholdIt](https://placehold.it)
- [PlaceImg](http://placeimg.com)
- [UnsplashIt](https://unsplash.it)

### Contributors
- [mrtnsn](https://github.com/mrtnsn)

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)