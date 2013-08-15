var start = process.hrtime()
func(600851475143)
var elapsed = process.hrtime(start)

console.log('\n' + elapsed[0]+'ms', elapsed[1]/1000+'us')

function func(N) {
  console.log('\n', N)
  var a = Math.ceil(Math.sqrt(N))
  var b2 = (a*a) - N
  var b2sr
  while (b2sr = Math.sqrt(b2), (b2sr|0) != b2sr) {
    a = a + 1 // equivalently: b2 ← b2 + 2*a + 1
    b2 = a*a - N // a ← a + 1
    // console.log(a, b2, Math.sqrt(b2))
  }

  var x = a - Math.sqrt(b2)
  var y = a + Math.sqrt(b2)

  console.log(x, 'or', y)

  if (x != 1 && y != 1) {
    func(y)
    func(x)
  }
}
