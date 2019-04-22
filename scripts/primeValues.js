var forge = require('node-forge')

const getPrimeValue = (bits) => {
  return new Promise((resolve, reject) => {
    forge.prime.generateProbablePrime(bits, (err, num) => {
      if (err) {
        reject(err)
        return
      }
      resolve(num)
    })
  })
}

module.exports = getPrimeValue
