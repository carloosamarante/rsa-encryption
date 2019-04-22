
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

  for (let i = 2; i < totientN; i++) {
    let comprimeTest = getCoprimeNumbers(totientN, i)
    if (comprimeTest === 1) {
      let e = i
      let d = Math.pow(e, -1) % totientN

      let encryptedKey = getEncryptedKey(e, n, string)
      getDecryptedKey(d, n, encryptedKey)
      return
    }
  }
}

module.exports = rsaEncryption
