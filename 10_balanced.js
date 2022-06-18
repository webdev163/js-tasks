// Напишите функцию, которая проверит строку на сбалансированность скобок: `{}, (), []`. Вернуть `true` если они сбалансированы, иначе `false`.
// ** Input **: String
// ** Output **: Boolean

function isBalanced(string) {
  const open = '([{'
  const close = ')]}'
  const arr = []

  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (open.includes(char)) arr.push(char)
    if (close.includes(char)) {
      const last = arr.pop()
      if (map[char] !== last) return false
    }
  }

  return !arr.length
}

console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false