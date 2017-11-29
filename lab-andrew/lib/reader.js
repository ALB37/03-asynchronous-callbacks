'use strict';

const reader = module.exports = {};

const fs = require('fs');

reader.readTxts = (arr, callback) => {
  if (!Array.isArray(arr)) throw new TypeError('arr must be an Array');
  const fileArr = [];
  const catPath = `${__dirname}/../assets/${arr[0]}`;
  const dogPath = `${__dirname}/../assets/${arr[1]}`;
  const fishPath = `${__dirname}/../assets/${arr[2]}`;
  fs.readFile(catPath, (error, data) => {
    if (error) callback(error);
    fileArr.push(data.toString());
    fs.readFile(dogPath, (error, data) => {
      if (error) callback(error);
      fileArr.push(data.toString());
      fs.readFile(fishPath, (error, data) => {
        if (error) callback(error);
        fileArr.push(data.toString());
        callback(null, fileArr);
      });
    });
  });
};

reader.recursivRead = () => {

};
