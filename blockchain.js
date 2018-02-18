const Block = require('./block');

const createGenesisBlock = () => Block(0, "01/01/2018", "Genesis block", "0"),
  getLatestBlock = (chain) => chain[chain.length - 1],
  addBlock = (newBlock, chain) => {
    newBlock.previousHash = getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    chain.push(newBlock);
  },
  isChainValid = (chain) => {
    let isValid;
    chain.forEach((block, index, chain) => {
      isValid = block.hash !== block.calculateHash() || block.previousHash !== chain[index - 1].hash ? false : true

      // add exception throw to exit at first instance of false hash
    })

    return isValid;
  }

const Blockchain = () => {
  chain: [createGenesisBlock()],
}
