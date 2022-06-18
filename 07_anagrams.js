// Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.
// ** Input **: String[]
// ** Output **: Boolean

function allAnagrams(array) {
  const sorted = array.map(el => el.split('').sort().join(''))
  return sorted.every(el => el === sorted[0])
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false