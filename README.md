# RSA Encryption
The idea of this project is to show the mathematical concepts behind the RSA (Rivest-Shamir-Adleman) algorithm explained in the Cybersecurity classes at [FIAP  University](https://www.fiap.com.br/) (Computer Engineering degrees).

## Dependencies and Technologies used

- __[NodeJS](https://nodejs.org/en/)__ - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- __[NPM JS](https://www.npmjs.com/)__ - npm (short for Node.js package manager) is a package manager for the JavaScript programming language.
- __[Node-forge](https://www.npmjs.com/package/node-forge)__ - A native implementation of TLS (and various other cryptographic tools) in JavaScript.
- __[Commander.js](https://www.npmjs.com/package/commander)__ - The complete solution for node.js command-line interfaces, inspired by Ruby's commander.

## Running locally

#### Dowloading dependencies
```bash
npm install
```

### Parameters
You have 2 mandatory parameters: bits and string that you can check below:
```
Options:
  -v, --version          output the version number
  -b, --bits <n>         The Encrypion bits that will be used (Eg. 4096)
  -s, --string <string>  The string that you want to encrypt/decrypt
  -h, --help             output usage information
```

### Running
`
node index.js -b 512 -s "TESTING"
`