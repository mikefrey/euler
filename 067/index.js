var fs = require('fs')

var triangle = fs.readFileSync(__dirname+'/triangle.txt', 'utf8')
var arr = triangle.split('\n')
arr = arr.map(function(s){return s.split(' ')})

var start = +new Date
var n = func(arr)
var time = +new Date - start

console.log(n)
console.log('\n'+time+'ms')

function func(p) {

  for (var i = p.length-2; i >= 0; i--) {
    for (var j = 0; j < p[i].length; j++) {
      var a = parseInt(p[i+1][j], 10)
      var b = parseInt(p[i+1][j+1], 10)
      p[i][j] = parseInt(p[i][j]) + ((a > b) ? a : b)
    }
  }

  // console.log(p.map(function(i) {return i.join(' ')}).join('\n'))

  return p[0][0]
}