// Напишите функцию`groupBy` (https://lodash.com/docs/4.17.15#groupBy).
// ** Input **: Number[] & String[], Function & String
// ** Output **: Object

function groupBy(array, fn) {
  const result = {}
  array.forEach((el, idx) => {
    const key = typeof fn === 'function' ? fn(array[idx]) : array[idx][fn]
    if (!result[key]) result[key] = []
    result[key].push(array[idx])
  })
  return result
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // -> { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(['one', 'two', 'three'], 'length')); // -> { '3': ['one', 'two'], '5': ['three'] }