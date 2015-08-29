# PINK NOISE SOURCE
[![Build Status](http://img.shields.io/travis/mohayonao/pink-noise-source.svg?style=flat-square)](https://travis-ci.org/mohayonao/pink-noise-source)
[![NPM Version](http://img.shields.io/npm/v/@mohayonao/pink-noise-source.svg?style=flat-square)](https://www.npmjs.org/package/@mohayonao/pink-noise-source)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> PinkNoiseSourceNode for Web Audio API

## Installation

Node.js

```
npm install @mohayonao/pink-noise-source
```

## Example

```js
import PinkNoiseSource from "@mohayonao/pink-noise-source";

let audioContext = new AudioContext();
let pinkNoise = new PinkNoiseSource(audioContext);

pinkNoise.start();
pinkNoise.connect(audioContext.destination);

setTimeout(() => {
  pinkNoise.stop();
  pinkNoise.disconnect();
}, 1000);
```

## API
- `constructor(audioContext: AudioContext)`

### Instance attributes
- `context: AudioContext` _readonly_
- `onended: function`

### Instance methods
- `start(when: number = 0): void`
- `stop(when: number = 0): void`
- `connect(...args): void`
- `disconnect(...args): void`
- `dispose(): void`

## License
MIT
