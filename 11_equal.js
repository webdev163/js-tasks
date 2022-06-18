// Напишите функцию, которая будет проверять на “глубокое” равенство 2 входящих параметра
// ** Inputs **: Any, Any
// ** Output **: Boolean

function deepEqual(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) return true
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b)
  }
  return a === b
}

const source = { a: 1, b: { c: 1 } }
const test1 = { a: 1, b: { c: 1 } }
const test2 = { a: 1, b: { c: 2 } }
console.log(deepEqual(source, test1)) // -> true
console.log(deepEqual(source, test2)) // -> false
console.log(deepEqual(NaN, NaN)) // -> true
console.log(deepEqual('test', 'test!')) // -> false
console.log(deepEqual()) // -> true