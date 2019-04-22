const getCoprimeNumbers = (valueBase, e) => {
  return (e === 0)
    ? valueBase
    : getCoprimeNumbers(e, valueBase % e)
}

module.exports = getCoprimeNumbers
