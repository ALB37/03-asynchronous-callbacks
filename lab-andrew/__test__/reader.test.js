'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {

  describe('testing functionality for reader.readTxts', () => {
    test('function should return cat.txt as a string', done => {
      reader.recursiveRead([`${__dirname}/../assets/cat.txt`, `${__dirname}/../assets/dog.txt`, `${__dirname}/../assets/fish.txt`], (error, data) => {
        expect(error).toBeNull();
        expect(data).toEqual(['cat\n', 'dog\n', 'fish\n']);
        done();
      });
    });
  });

  describe('testing invalid paths for reader.readTxts', () => {
    test('function should throw an error if path to cat.txt is invalid', done => {
      reader.readTxts([`${__dirname}/../assets/cat.tttttt`, `${__dirname}/../assets/dog.txt`, `${__dirname}/../assets/fish.txt`], (error) => {
        expect(error).not.toBeNull();
        done();
      });
    });
    test('function should throw an error if path to dog.txt is invalid', done => {
      reader.readTxts([`${__dirname}/../assets/cat.txt`, `${__dirname}/../assets/dog.sssst`, `${__dirname}/../assets/fish.txt`], (error) => {
        expect(error).not.toBeNull();
        done();
      });
    });
    test('function should throw an error if path to fish.txt is invalid', done => {
      reader.readTxts([`${__dirname}/../assets/cat.txt`, `${__dirname}/../assets/dog.txt`, `${__dirname}/../assets/fish.es`], (error) => {
        expect(error).not.toBeNull();
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
