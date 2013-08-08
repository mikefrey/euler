var start = +new Date
var n = func(10001)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')



function func(num) {
  var primes = [2,3,5,7,11,13,17,19]
  var n = 21

  var isPrime = function(no) {
    for (var i = 0; i < primes.length; i++) {
      if (!(no % primes[i])) return false
    }
    return true
  }

  while (primes.length < num) {
    n += 2
    if (isPrime(n)) primes.push(n)
  }

  return primes[num-1]
}
