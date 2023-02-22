// type casting is used to convert the type of data to another line number to string, date to string, number to boolean and vice versa

// number to string and string to number

var strToNum = "55"
console.log(typeof strToNum)
var numToStr = Number(strToNum)
console.log(typeof numToStr)
console.log(typeof numToStr.toString())

//booleans to numbers

console.log(Number(false)) //0
console.log(Number(true)) //1

// booleans to string

console.log(false.toString())
console.log(true.toString())
console.log(typeof false.toString())
console.log(typeof true.toString())