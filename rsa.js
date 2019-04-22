var forge = require('node-forge'),
    stringInput = '"The information security is of significant importance to ensure the privacy of communications".';

const firstPrimeValue = () => {
  return new Promise((resolve, reject) => {
    forge.prime.generateProbablePrime(512, (err, num) => {
      if (err) {
       reject(err);
       return;
      }
      resolve(num);
    });
  });
}

const totientValue = (p, q) => {
  return new Promise((resolve, reject) => {
    resolve((p-1)*(q-1));
  });
}

const coprimesNumbers = (valueBase,e) => {
  return new Promise((resolve, reject) => {
    resolve((e == 0) ? valueBase : coprimesNumbers(e, valueBase%e));
  }); 
};

const calculateD = (e, totientN) => {
  return new Promise((resolve, reject) => {
    resolve(Math.pow(e,-1) % totientN);
  });
}

const encryptedKey = (e, n, string, d) => {
  return new Promise((resolve, reject) => {
    let publicKey = [],
        charEncrypted = [];

    for(i=0; i < string.length; i++) {
      let charNumber,
          char;
      charNumber = string.charCodeAt(i);
      char = (Math.pow(charNumber, e) % n);
      charEncrypted.push(char);
      publicKey.push(Buffer.from(String.fromCharCode(char)).toString('base64'));
    }
    console.log('Chave Pública: ' + publicKey.join(""));

    decryptedKey(d, n, charEncrypted);
  });
}

const decryptedKey = (d, n, stringEncrypted) => {
  return new Promise((resolve, reject) => {
    let privateKey = [];

    for(i=0; i < stringEncrypted.length; i++) {
      let charNumber;
      charNumber = stringEncrypted[i];
      char = (Math.pow(charNumber, d) % n);
      privateKey.push(String.fromCharCode(Math.round(char)));
    }
    console.log('Chave Privada: ' + privateKey.join(""));
  });
}

const rsaEncryption = async (string) => {
  let p = await firstPrimeValue();
      q = await firstPrimeValue(),
      n = await p * q,
      totientN = await totientValue(p, q);
  for(i = 2; i < totientN; i++) {
    let comprimeTest = await coprimesNumbers(totientN,i);
    if (comprimeTest == 1) {
      let e = i,
          d = await calculateD(e, totientN);

      await encryptedKey(e, n, string, d);
      return
    }
  }
}

console.log('A string informada foi: ' + stringInput);
rsaEncryption(stringInput);
