'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {

  describe('testing functionality for cat.txt', () => {
    test('function should return cat.txt as a string', done => {
      reader.readTxts(['cat.txt', 'dog.txt', 'fish.txt'], (error, data) => {
        expect(error).toBeNull();
        expect(data).toEqual(['cat\n', 'dog\n', 'fish\n']);
        done();
      });
    });
  });

  describe('testing invalid input for cat.txt', () => {
    test('function should throw error if not given an array', () => {
      expect(() => reader.readTxts('bla')).toThrow();
    });
  });
});
