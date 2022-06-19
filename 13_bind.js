// Реализуйте функцию`bind`.
// ** Input **: Object, arguments
// ** Output **: Function

Function.prototype.myBind = function(ctx, ...args) {
  let func = this;
  return function(...args2) {
    func.apply(ctx, [...args, ...args2])
  } 
}

function log(...args) {
  console.log(this.name, this.age, ...args)
}

const obj = { name: 'Dmitry', age: 33 }

log.myBind(obj, 'arg1')('arg2')