// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.
// ** Input **: String
// ** Output **: String

function removeDupes(str) {
  const set = new Set()
  str.split('').forEach(el => set.add(el))
  const result = [...set].join('')
  return result
}

console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'