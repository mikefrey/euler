var start = +new Date
var n = func(+new Date('1901-01-01'), +new Date('2000-12-31'))
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')

function func(d1, d2) {

  var sum = 0
  var h24 = 1000 * 60 * 60 * 24
  var d = d1
  var dt = new Date()

  while (d <= d2) {
    dt.setTime(d)
    if (dt.getUTCDate() == 1 && dt.getUTCDay() == 0) sum+=1
    d += h24
  }

  return sum
}