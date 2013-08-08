var start = +new Date
var n = func(2000001)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')


function func(num) {
  var sum = 0
  var nsr = num //Math.sqrt(num)
  var arr = []

  for (var i = 2; i <= nsr; i++) {
    arr[i] = true
  }

  for (var i = 2; i <= nsr; i++) {
    if (arr[i]) {
      for (var j = i*i; j <= num; j+=i) {
        arr[j] = false
      }
    }
  }

  for (var i = 2; i <= nsr; i++) {
    if (arr[i]) {
      sum += i
    }
  }

  return sum
}

// 142913828922
// 142913828922

// function func(num) {
//   var primes = [2,3,5,7,11,13,17,19]
//   var sum = 0 //2+3+5+7+11+13+17+19
//   var n = 21

//   var isPrime = function(no) {
//     for (var i = 0; i < primes.length; i++) {
//       if (!(no % primes[i])) return false
//     }
//     return true
//   }

//   for (; n < num; n+=2) {
//     if (isPrime(n)) {
//       primes.push(n)
//       // sum += n
//     }
//   }

//   for (var i = 0; i < primes.length; i++) {
//     sum += primes[i]
//   }

//   return sum
// }
