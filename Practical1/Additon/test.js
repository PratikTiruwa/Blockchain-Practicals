

const {Block, Blockchain} = require('./blockchain');

let mb = new Blockchain();

console.log("Pratik Tiruwa")
console.log("31031523035")


console.log("First transaction");
mb.addBlock(new Block(1, '23/10/2024', 23, 5));
mb.addBlock(new Block(2, '23/10/2024', 2, 15));


console.log(JSON.stringify(mb, null, 3));