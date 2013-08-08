var start = +new Date
var n = func(2000000)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')



function func(num) {
  var primes = [2,3,5,7,11,13,17,19]
  var sum = 0 //2+3+5+7+11+13+17+19
  var n = 21

  var isPrime = function(no) {
    for (var i = 0; i < primes.length; i++) {
      if (!(no % primes[i])) return false
    }
    return true
  }

  for (; n < num; n+=2) {
    if (isPrime(n)) {
      primes.push(n)
      // sum += n
    }
  }

  for (var i = 0; i < primes.length; i++) {
    sum += primes[i]
  }

  return sum
}
