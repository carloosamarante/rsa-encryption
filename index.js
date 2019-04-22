#!/usr/bin/env node

const rsaEncryption = require('./scripts/rsaEncryption')
var program = require('commander')

program
  .version('1.0.0', '-v, --version')
  .option('-b, --bits <n>', '[!Mandatory] The Encrypion bits that will be used (Eg. 4096)', parseInt)
  .option('-s, --string <string>', '[!Mandatory] The string that you want to encrypt/decrypt')
  .parse(process.argv)

if (!program.bits || !program.string) {
  program.outputHelp()
} else {
  rsaEncryption(program.string, program.bits)
}
