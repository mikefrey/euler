var start = +new Date
var n = func(1000)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')

function func(num) {

  var a = 1
  var b = 2
  var c = num-a-b

  while (a*a + b*b != c*c) {
    if (b+1 >= c) {
      a += 1
      b = a + 1
      c = num-a-b
    } else {
      b += 1
      c -= 1
    }
  }

  return a*b*c
}
