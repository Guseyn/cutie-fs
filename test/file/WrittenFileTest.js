'use strict'

const { as } = require('@cuties/cutie');
const { 
  EqualAssertion 
} = require('@cuties/assert');
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
