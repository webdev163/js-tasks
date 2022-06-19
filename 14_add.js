// Напишите функцию, которая складывает 2 числа. Работать функция должна как показано в примере ниже:
// ** Input **: Number, Number
// ** Output **: Number

function add(a, b) {
  if (!a) {
    return add
  }
  if (!b) {
    return function sum(c) {
      if (!c) return sum
      return a + c
    }
  }
  return a + b
}

console.log(add(20, 22)) // -> 42
console.log(add(20)(22)) // -> 42
console.log(add(20)()(22)) // -> 42
console.log(add(20)()()()(22)) // -> 42
console.log(add(20)()()()()()()()()()()()(22)) // -> 42
console.log(add()(20)(22)) // -> 42
console.log(add()()()()(20)(22)) // -> 42
console.log(add()(20)()(22)) // -> 42
console.log(add()()()()()(20)()()()(22)) // -> 42