
const c = require('crypto');
const { blob } = require('stream/consumers');

class Block {
    constructor(i, t, n, ph = '') {
        this.i = i;
        this.t = t;
        this.n = n; 
        this.fact = this.factorial();
        this.ph = ph;
        this.h = this.calHash();
    }

    factorial(n) {
        let ans = 1;

        if (n === 0)
            return 1;
        for (let i=2; i<=n; i++)
            ans = ans * i;
        return ans;
    }

    calHash() {
        return c.createHash('sha256')
        .update(this.i + this.t + this.sum + this.ph)
        .digest('hex');
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGBlock()];
    }

    createGBlock() {
        return new Block(0, '24/10/2024', 0, 0, '0');
    }

    getcBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(nb) {
        nb.ph = this.getcBlock().h;
        nb.h = nb.calHash();
        this.chain.push(nb);
    }
}

module.exports.Block = Block;
module.exports.Blockchain = Blockchain;
