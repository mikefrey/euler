var start = process.hrtime()
var n = func(20)
var elapsed = process.hrtime(start)

console.log(n)
console.log('\n' + elapsed[0]+'ms', elapsed[1]/1000+'us')


function func(num) {
  var n, i = 0
  while (i += num) {
    for (n = num-1; n > 1; n--) {
      if (i % n) break
    }
    if (n == 1) return i
  }
}