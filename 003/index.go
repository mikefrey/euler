package main

import (
  "fmt"
  "time"
  "math"
)

func main() {
  start := time.Now()
  run(600851475143)
  elapsed := time.Since(start)

  // fmt.Println(res1, "or", res2)
  fmt.Printf("\n%s\n", elapsed)
}

func run(N float64) {
  a := math.Ceil(math.Sqrt(N))
  b2 := a*a - N

  for b2sr := math.Sqrt(b2); math.Floor(b2sr) != b2sr; b2sr = math.Sqrt(b2) {
    a = a + 1
    b2 = a * a - N
  }

  x := a - math.Sqrt(b2)
  y := a + math.Sqrt(b2)

  fmt.Println(x, "or", y)

  if (x != 1 && y != 1) {
    run(y)
    run(x)
  }
}