// 创建Vue根实例
import Vue from 'vue'

// 导入App组件
import App from './App.vue'

// 创建Vue的根实例
new Vue({
  el: '#app',
  components: {
    // 组件名： 组件对象
    App
  },
  template: '<App/>'
})

// 挂载App组件
// const arr = [1,2,3].map(item => item + 1)
// console.log(arr)
// async function create() {
//   const {
//       default: _
//   } = await import(/*webpackChunkName:"lodash"*/'lodash')
//   let element = document.createElement('div')
//   element.innerHTML = _.join(['TianTian', 'lee'], '-')
//   return element
// }

// (function demo() {
//   document.addEventListener('click', function () {
//       create().then(element => {
//           document.body.appendChild(element)
//       })
//   })
// })()