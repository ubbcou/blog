var arrSlice = require('./array-slice');

var array = [1,2,3,4,5,6];

var result = arrSlice(array, 1, 5);

console.log('========↓↓↓========');
console.log(result);
console.log('========↑↑↑========');

function myArraySlice(array, start, end) {
  var len = array.length;
  start = myGetIndex(len, start);
  end = myGetIndex(len, end, len);

  var range = [];
  while(start < end) {
    range.push(array[start++]);
  }
  return range;
}
function myGetIndex(len, pos, end) {

}

var result = arrSlice(array, 2, 5);
console.log('========↓↓↓========');
console.log(result);
console.log('========↑↑↑========');
