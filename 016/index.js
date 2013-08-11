var BigNum = require('bignumber.js')
var start = +new Date
var n = func(1000)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')

function func(num) {

  var n = new BigNum(2)
  n = n.pow(num)
  return n.toFixed(0).split('').reduce(function(memo, v) { return memo + parseInt(v,10) }, 0)
}