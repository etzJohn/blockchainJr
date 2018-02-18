const SHA256 = require('crypto-js/sha256'),

  calculateHash = (index, timestamp, data, previousHash) => SHA256(index + timestamp + JSON.stringify(data) + previousHash);

  Block = (index, timestamp, data, previousHash) => {
    return ({
      index,
      previousHash,
      timestamp,
      data,
      hash: calculateHash(index, timestamp, data, previousHash)
    })
  }
