var start = +new Date
var n = func(1000000)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')

function func(num) {
  var g = 0
  var gi

  for (var i = 1; i < num; i+=1) {
    var c = 0
    var n = i
    while (n != 1) {
      n = (n % 2 == 0) ? n/2 : n*3+1
      c++
    }
    if (c > g) {
      g = c
      gi = i
    }
  }

  return gi
}