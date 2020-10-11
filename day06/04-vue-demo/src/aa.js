// 在脚手架模块化环境中, 每个js文件, 都可以理解为是一个模块
// 就可以导入导出, 且有自己的独立的作用域
export const num1 = 11
export const num2 = 22
export const obj = {

  name: 'zs',
  age: 18
}

export function fn () {
  console.log('你好哇, 我是函数')
}

export function add (a, b) {
  return a + b
}
export function minus (a, b) {
  return a - b
}
