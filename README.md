# PinkNoiseNode
[![Build Status](http://img.shields.io/travis/mohayonao/pink-noise-node.svg?style=flat-square)](https://travis-ci.org/mohayonao/pink-noise-node)
[![NPM Version](http://img.shields.io/npm/v/pink-noise-node.svg?style=flat-square)](https://www.npmjs.org/package/pink-noise-node)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> PinkNoise AudioNode for Web Audio API

## Installation

```
npm install pink-noise-node
```

downloads:

- [pink-noise-node.js](https://raw.githubusercontent.com/mohayonao/pink-noise-node/master/build/pink-noise-node.js)
- [pink-noise-node.min.js](https://raw.githubusercontent.com/mohayonao/pink-noise-node/master/build/pink-noise-node.min.js)

## API
### PluckNode
- `constructor(audioContext)`

#### Class Methods
- `install(): void`
  - install `createPinkNoise()` method to `AudioContext.prototype` force

#### Instance Methods
- `start(when: number): void`
- `stop(when: number): void`

## Usage

```js
var noise = new PinkNoiseNode(audioContext);

noise.start(audioContext.currentTime);
noise.stop(audioContext.currentTime + 4);
```

### Install to AudioContext

At first, call `install()` method.

```js
require("pink-noise-node").install();
```

```html
<script src="/path/to/pink-noise-node.js"></script>
<script>PinkNoiseNode.install();</script>
```

Then, you can use `createPinkNoise()` method at AudioContext.

## Demo

http://mohayonao.github.io/pink-noise-node/

## License

MIT
