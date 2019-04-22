const getEncryptedKey = (e, n, string) => {
  let publicKey = []
  let charEncrypted = []

  for (let i = 0; i < string.length; i++) {
    let charNumber,
      char
    charNumber = string.charCodeAt(i)
    char = (Math.pow(charNumber, e) % n)
    charEncrypted.push(char)
    publicKey.push(Buffer.from(String.fromCharCode(char)).toString('base64'))
  }

  console.log('Chave Pública: ' + publicKey.join(''))
  return charEncrypted
}

module.exports = getEncryptedKey
