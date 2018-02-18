const SHA256 = require('crypto-js/sha256');

const Block = (index, timestamp, data, previousHash) => {
  const calculateHash = () => SHA256(index + timestamp + JSON.stringify(data) + previousHash);

  return ({
    index,
    previousHash,
    timestamp,
    data,
    hash: calculateHash()
  })
}
