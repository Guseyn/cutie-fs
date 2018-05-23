'use strict'

const { as } = require('@guseyn/cutie');
const { 
  EqualAssertion 
} = require('@guseyn/cutie-assert');
const {
  WrittenFile,
  ReadDataByPath
} = require('./../../index');

const file = './test/data/files/test-46.txt';
const data = 'test buffer';

new EqualAssertion(
  new ReadDataByPath(
    new WrittenFile(file, data), 'utf8'
  ), data
).call();
