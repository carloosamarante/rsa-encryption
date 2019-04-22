const getCoprimeNumbers = (valueBase, e) => {
  while (e !== 0) {
    let initalE = e

    e = valueBase % e
    valueBase = initalE
  }

  return valueBase
}

module.exports = getCoprimeNumbers
