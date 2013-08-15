var start = process.hrtime()
var n = func(100)
var elapsed = process.hrtime(start)

console.log(n)
console.log('\n' + elapsed[0]+'ms', elapsed[1]/1000+'us')

function func(num) {
  var sum = 0
  var sumSq = 0
  for (var i = 1; i < num+1; i+=1) {
    sum += i
    sumSq += i*i
  }

  return sum*sum - sumSq
}