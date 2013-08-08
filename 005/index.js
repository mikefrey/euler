var start = +new Date
var n = smallestMultiple(20)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')


function smallestMultiple(num) {
  var n, i = 0
  while (i += num) {
    for (n = num-1; n > 1; n--) {
      if (i % n) break
    }
    if (n == 1) return i
  }
}