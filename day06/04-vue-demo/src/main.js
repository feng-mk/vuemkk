// public/index.html,会自动加载打包(合并压缩，解决兼容性)后的main.js
// console.log('这是main.js')

// 因为现在我们是在脚手架的环境下开发，脚手架中集成了 babel，帮你解决 兼容性
// 所以 src 目录下，可以任意使用新版本语法，比如：es6 模块化
// es5 :require module.exports
// es6的模块化语法，是标准
// ----------------------

/* es6模块化，  导入：import  导出： export
   1,按需 导入 和 导出
    一个模块，可以导出很多的内容的，将来别人可以按需导入
      （1）导出
        export const num = 11
        export const num = 22
        export const arr = ['a','b','c']
        export function fn () { ... }
      （2）导入，需要哪个导哪个
        import {} from 'js文件模块名'
   2，默认 导入 和 导出
*/

import result from './bb.js'
const num = 11
console.log(result)
console.log(num)
