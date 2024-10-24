

console.log("Pratik Tiruwa , 31031523035")

const {Block, Factchain} = require('./Happynumber');

let mb = new Factchain();

mb.addBlock(new Block(1, new Date().toISOString(), 19));
mb.addBlock(new Block(2, new Date().toISOString(), 7));

console.log(JSON.stringify(mb, null, 1));