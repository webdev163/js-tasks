// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: 'a' и 'A' разные символы.
// ** Input **: String
// ** Output **: Boolean

function isUnique(string) {
  const arr = string.split('')
  const uniqueArr = [...new Set(arr)]
  return arr.length === uniqueArr.length
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false