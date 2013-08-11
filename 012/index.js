var start = +new Date
var n = func(500)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')

function func(num) {
  var factors = 0
  var n = 0
  var f
  while (factors < num) {
    n++
    f = factorial(n)
    factors = countFactors(f)

  }
    console.log(n + '---' + f + '---' + factors)
  return f
}


function countFactors(n) {
  var count = 2
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      count++
      if (i != n/i) count++
    }
  }
  return count
}


function factorial(x) {
  var f = 0
  for (var i = 1; i <= x; i++) {
    f += i
  }
  return f
}