var sum = 0
fib(4000000)

function fib(num) {
  var n = 1, p = 0, o
  while (n < num) {
    if (n % 2 == 0) sum += n
    o = n + p
    p = n
    n = o
  }
}

console.log(sum)
