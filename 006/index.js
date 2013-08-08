var start = +new Date
var n = func(100)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')

function func(num) {
  var sum = 0
  var sumSq = 0
  for (var i = 1; i < num+1; i+=1) {
    sum += i
    sumSq += i*i
  }

  return sum*sum - sumSq
}