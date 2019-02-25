'use strict';

function getIndex(len, pos, end) {
  if (pos === null || pos === undefined) {
    pos = end || 0;
  } else if (pos < 0) {
    pos = Math.max(len + pos, 0);
  } else {
    pos = Math.min(pos, len);
  }
  return pos;
}

module.exports = function slice(arr, start, end) {
  var len = arr.length;
  var range = [];

  start = getIndex(len, start);
  end = getIndex(len, end, len);

  while(start < end) {
    range.push(arr[start++]);
  }
  return range;
}
