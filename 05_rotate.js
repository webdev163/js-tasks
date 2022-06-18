// Напишите функцию, которая принимает 2 строки. Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните `false`.
// ** Input **: String, String
// ** Output **: Boolean

function isStringRotated(source, test) {
  for (let i = 0; i < source.length; i++) {
    const rotated = source.slice(i, source.length) + source.slice(0, i)
    if (rotated === test) return true
  }
  return false
}

console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false