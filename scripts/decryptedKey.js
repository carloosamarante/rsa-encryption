const getDecryptedKey = (d, n, stringEncrypted) => {
  let privateKey = []

  for (let i = 0; i < stringEncrypted.length; i++) {
    let charNumber = stringEncrypted[i]
    let char = (Math.pow(charNumber, d) % n)
    privateKey.push(String.fromCharCode(Math.round(char)))
  }
  console.log('Mensagem decifrada: ' + privateKey.join(''))
}

module.exports = getDecryptedKey
