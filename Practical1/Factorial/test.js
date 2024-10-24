
const {b, bc, Blockchain, Block} = require('./blockchain');

let mb = new Blockchain();
console.log("Name : Pratik Tiruwa , Seat No : 31031523035");

mb.addBlock(new Block(1, '24/10/2024', 5));
mb.addBlock(new Block(2, '24/10/2024', 12));

console.log(JSON.stringify(mb, null, 3));