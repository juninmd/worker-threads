const { parentPort, workerData } = require('worker_threads');

console.log('recebi:', workerData);
function random(min, max) {
  return Math.random() * (max - min) + min
}

const start = Date.now()
let bigList = Array(1000000).fill().map((_) => random(1, 10000))

parentPort.postMessage({ val: bigList[0], timeDiff: Date.now() - start });