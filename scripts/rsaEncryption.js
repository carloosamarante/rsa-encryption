
const getPrimeValue = require('./primeValues')
const getTotientValue = require('./totienValue')
const getCoprimeNumbers = require('./coprimeNumbers')
const getEncryptedKey = require('./encryptedKey')
const getDecryptedKey = require('./decryptedKey')

const rsaEncryption = async (string, bits) => {
  console.log('A string informada foi: ' + string)

  let [p, q] = await Promise.all([getPrimeValue(bits), getPrimeValue(bits)])
  let n = p * q
  let totientN = getTotientValue(p, q)

  console.log("O valor do p: " + p.toString(10));
  console.log("O valor do q: " + q.toString(10));
  console.log("O valor do n: " + n.toString(10));

  for (let i = 2; i < totientN; i++) {
    let comprimeTest = getCoprimeNumbers(totientN, i)
    if (comprimeTest === 1) {
      let e = i
      let d = Math.pow(e, -1) % totientN

      console.log("O valor do e: " + e.toString(10));
      console.log("O valor do d: " + d.toString(10));

      let encryptedKey = getEncryptedKey(e, n, string)
      getDecryptedKey(d, n, encryptedKey)
      return
    }
  }
}

module.exports = rsaEncryption
