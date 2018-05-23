'use strict'

const { as } = require('@guseyn/cutie');
const { 
  EqualAssertion 
} = require('@guseyn/cutie-assert');
const {
  WrittenFileSync,
  ReadDataByPath
} = require('./../../index');

const file = './test/data/files/test-45.txt';
const data = 'test buffer';

new EqualAssertion(
  new ReadDataByPath(
    new WrittenFileSync(file, data), 'utf8'
  ), data
).call();
