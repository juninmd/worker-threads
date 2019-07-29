const { Worker, isMainThread, parentPort } = require('worker_threads');
const request = require("request");
const path = require("path");


console.log("This is the main thread")

const caminho = path.resolve(__dirname, './batata.js');

let w = new Worker(caminho, { workerData: [1, 2, 3] });
w.on('message', (msg) => { //A message from the worker!
  console.log("First value is: ", msg.val);
  console.log("Took: ", (msg.timeDiff / 1000), " seconds");
})
w.on('error', console.error);
w.on('exit', (code) => {
  if (code != 0)
    console.error(new Error(`Worker stopped with exit code ${code}`))
});

request.get('http://www.google.com', (err, resp) => {
  if (err) {
    return console.error(err);
  }
  console.log("Total bytes received: ", resp.body.length);
})
