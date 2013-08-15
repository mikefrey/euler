var start = process.hrtime()
var n = func()
var elapsed = process.hrtime(start)

console.log(n)
console.log('\n' + elapsed[0]+'ms', elapsed[1]/1000+'us')

function func(num) {
  var x = 999
  var y = 999
  var p = []

  while (x > 99) {
    while (y > 99) {
      if (isPalendrome((x*y).toString())) {
        p.push(x*y)
      }
      y--
    }
    y = x = x - 1
  }

  p.sort(function(a,b){return b-a})
  return p[0]
}

function isPalendrome(s) {
  var l = s.length
  var hl = (l/2)|0
  return s.substring(0,hl) == s.substring(l-hl).split('').reverse().join('')
}


