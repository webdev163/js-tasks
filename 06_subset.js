// Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть, есть ли элементы второго массива в первом.
// ** Input **: Number[] & String[], Number[] & String[]
// ** Output **: Boolean

function arraySubset(source, subset) {
  for (let i = 0; i < subset.length; i++) {
    const curr = subset[i]
    const currIdx = source.indexOf(curr)
    if (currIdx < 0) return false
    delete source[currIdx]
  }
  return true
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false