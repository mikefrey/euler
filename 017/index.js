var and = 'And'
var hundred = 'Hundred'
var thousand = 'Thousand'
var ones = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine'
]
var teens = [
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen'
]
var tens = [
  'WRONGZERO',
  'WRONGTEN',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety'
]

var start = +new Date
var n = func(1000)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')

function func(num) {
  var sum = 0
  var word, n

  for (var i = 1; i <= num; i++) {
    n = i
    word = ''
    if (n >= 1000) {
      word += ones[1] + thousand
      n = n % 1000
    }
    if (n >= 100) {
      word += ones[(n/100)|0] + hundred
      n = n % 100
      if (n > 0) word += and
    }
    if (n >= 20) {
      word += tens[(n/10)|0]
      n = n % 10
    }
    if (n >= 10) {
      word += teens[n-10]
      n = 0
    }
    if (n > 0) {
      word += ones[n]
    }
    sum += word.length
    // console.log(i, word)
  }

  return sum
}
