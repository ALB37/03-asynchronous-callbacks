'use strict';

const reader = module.exports = {};

const fs = require('fs');

// Non-recursive method
reader.readTxts = (arr, callback) => {
  if (!Array.isArray(arr)) throw new TypeError('arr must be an Array');
  const fileArr = [];
  fs.readFile(arr[0], (error, data) => {
    if (error) return callback(error);
    fileArr.push(data.toString());
    fs.readFile(arr[1], (error, data) => {
      if (error) return callback(error);
      fileArr.push(data.toString());
      fs.readFile(arr[2], (error, data) => {
        if (error) return callback(error);
        fileArr.push(data.toString());
        callback(null, fileArr);
      });
    });
  });
};

// Recursive method
reader.fileArr = [];
reader.recursiveRead = (arr, callback) => {
  if (!Array.isArray(arr)) throw new TypeError('arr must be an Array');
  if (arr.length > 0) {
    let currentPath = arr.splice(0, 1)[0];
    fs.readFile(currentPath, (error, data) => {
      if (error) return callback(error);
      reader.fileArr.push(data.toString());
      reader.recursiveRead(arr, callback);
    });
  } else {
    callback(null, reader.fileArr);
  }
};
