var start = process.hrtime()
var n = func(4000000)
var elapsed = process.hrtime(start)

console.log(n)
console.log('\n' + elapsed[0]+'ms', elapsed[1]/1000+'us')

function func(num) {
  var sum = 0
  var n = 1, p = 0, o
  while (n < num) {
    if (n % 2 == 0) sum += n
    o = n + p
    p = n
    n = o
  }
  return sum
}
