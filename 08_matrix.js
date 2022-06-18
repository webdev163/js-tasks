// Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.

// [1, 2, 3]    [7, 4, 1]
// [4, 5, 6] -> [8, 5, 2]  
// [7, 8, 9]    [9, 6, 3]   

// ** Input **: Number[][]
// ** Output **: Number[][]

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotate(source) {
  const rotated = Array(3).fill().map(() => Array(3).fill(0))
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      const value = source[i][j]
      const idx = source.length - i - 1
      rotated[j][idx] = value
    }
  }
  return rotated
}

console.log(rotate(matrix))