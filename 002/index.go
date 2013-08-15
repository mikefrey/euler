package main

import (
  "fmt"
  "time"
)

func main() {
  start := time.Now()
  result := run(4000000)
  elapsed := time.Since(start)

  fmt.Println(result)
  fmt.Printf("\n%s\n", elapsed)
}

func run(num int) (sum int) {
  sum = 0
  n, p := 1, 0
  var o int
  for n < num {
    if n % 2 == 0 {
      sum += n
    }
    o = n + p
    p = n
    n = o
  }
  return
}