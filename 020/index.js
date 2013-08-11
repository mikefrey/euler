var BigNum = require('bignumber.js')
var start = +new Date
var n = func(100)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')

function func(num) {
  return factorial(num).toFixed(0)
    .split('')
    .map(function(n){ return parseInt(n, 10) })
    .reduce(function(s, n){ return s+n })
}

function factorial(n) {
  var f = new BigNum(1)
  for (var i = n; i > 0; i--) {
    f = f.times(i)
  }
  return f
}
