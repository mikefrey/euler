package main

import (
  "fmt"
  "time"
  "strconv"
)

func main() {
  start := time.Now()
  result := run()
  elapsed := time.Since(start)

  fmt.Println(result)
  fmt.Printf("\n%s\n", elapsed)
}

func run() int {
  x, y := 999, 999
  max := 0

  for x > 99 {
    for y > 99 {
      if (Palindrome(strconv.Itoa(x*y)) && x*y > max) {
        max = x*y
      }
      y--
    }
    x = x - 1
    y = x
  }

  return max
}

func Palindrome(s string) bool {
  runes := []rune(s)
  for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
    if (runes[i] != runes[j]) {
      return false
    }
  }
  return true
}