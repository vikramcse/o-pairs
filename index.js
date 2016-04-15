'use strict';

function getPairsFromObject(obj) {
  var result = [];
  var keys;

  if (!obj) throw new TypeError('There must be an input argument');
  keys = Object.keys(obj);

  keys.forEach(function (key) {
    result.push([key, obj[key]]);
  });

  return result;
}

module.exports = getPairsFromObject;
