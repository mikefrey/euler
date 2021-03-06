package main

import (
  "fmt"
  "time"
)

func main() {
  start := time.Now()
  result := run(1000)
  elapsed := time.Since(start)

  fmt.Println(result)
  fmt.Printf("\n%s\n", elapsed)
}

func run(num int) (sum int) {
  sum = 0
  for i := 0; i < 1000; i++ {
    if i % 3 == 0 || i % 5 == 0 {
      sum += i
    }
  }
  return
}