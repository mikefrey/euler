var start = process.hrtime()
var n = func(1000)
var elapsed = process.hrtime(start)

console.log(n)
console.log('\n' + elapsed[0]+'ms', elapsed[1]/1000+'us')

function func(num) {
  var sum = 0
  for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0)
      sum += i
  }
  return sum
}
