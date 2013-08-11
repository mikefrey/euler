var start = +new Date
var n = func(20)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')

function func(num) {
  return binomialCoefficient(20+20, 20)|0
}


function binomialCoefficient(n, k) {
  return factorial(n) / (factorial(n-k) * factorial(k))
}


function factorial(n) {
  var f = 1
  for (var i = n; i > 0; i--) {
    f *= i
  }
  return f
}
