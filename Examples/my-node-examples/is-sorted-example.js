const isSorted = require('./is-sorted.js');

// -- 1 --
// const array = [1,2,3,4,5];
// const resultBoolean = isSorted(array);

// -- 2 --
// const array = [5,4,4,3,2,1];
// const resultBoolean = isSorted(array, (a, b) => b - a);

// -- 3 --
const array = [{
  a: 1
}, {
  a: 2
}, {
  b: 3
}];
const resultBoolean = isSorted(array, (a, b) => a.a - b.a);
console.log('========↓↓↓========');
console.log(resultBoolean);
console.log('========↑↑↑========');