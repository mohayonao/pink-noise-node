# PinkNoiseSourceNode
[![Build Status](http://img.shields.io/travis/mohayonao/pink-noise-source.svg?style=flat-square)](https://travis-ci.org/mohayonao/pink-noise-source)
[![NPM Version](http://img.shields.io/npm/v/pink-noise-source.svg?style=flat-square)](https://www.npmjs.org/package/pink-noise-source)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> PinkNoise AudioNode for Web Audio API

## Installation

```
npm install pink-noise-source
```

downloads:

- [pink-noise-source.js](https://raw.githubusercontent.com/mohayonao/pink-noise-source/master/build/pink-noise-source.js)
- [pink-noise-source.min.js](https://raw.githubusercontent.com/mohayonao/pink-noise-source/master/build/pink-noise-source.min.js)

## API
### PluckNode
- `constructor(audioContext)`

#### Class Methods
- `install(): void`
  - install `createPinkNoiseSource()` method to `AudioContext.prototype` force

#### Instance Methods
- `start(when: number): void`
- `stop(when: number): void`

## Usage

```js
var noise = new PinkNoiseSourceNode(audioContext);

noise.start(audioContext.currentTime);
noise.stop(audioContext.currentTime + 4);
```

### Install to AudioContext

At first, call `install()` method.

```js
require("pink-noise-source").install();
```

```html
<script src="/path/to/pink-noise-source.js"></script>
<script>PinkNoiseSourceNode.install();</script>
```

Then, you can use `createPinkNoiseSource()` method at AudioContext.

## Demo

http://mohayonao.github.io/pink-noise-source/

## License

MIT
