// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.
// ** Input **: String[]
// ** Output **: String

function highestFrequency(array) {
  const obj = {}
  array.forEach(el => {
    obj[el] ? obj[el] = obj[el] + 1 : obj[el] = 1
  })
  const entries = Object.entries(obj);
  const sorted = entries.sort((a, b) => b[1] - a[1]);
  return sorted[0][0]
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])) // -> ghi