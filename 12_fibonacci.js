// Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны `n`, которую передали как аргумент.
// ** Input **: Number
// ** Output **: Number[]

function fibonacci(n) {
  let result = []
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      result.push(1)
    } else {
      const num = result[i - 1] + result[i - 2]
      result.push(num)
    }
  }
  return result
}

console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]