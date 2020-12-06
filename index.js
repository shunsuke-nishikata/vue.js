// // elはid属性値
// // new VueでVueインスタンスの作成
// const vm = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue.js!',
//     isChecked: true
//   },
// })

// const vm1 = new Vue({
//   el: '#list',
//   data: {
//     items: [
//         { title: '項目1', id: 1 },
//         { title: '項目2', id: 2 },
//         { title: '項目3', id: 3 },
//     ]
//   }
// })

// const vm2 = new Vue ({
//   el: '#click',
//   data: {
//     counter: 0
//   },
//   methods: {
//     add: function() {
//       this.counter++
//     },
//   },
// })


const vm = new Vue({
  el: '#app',
  data: {
    items: [
        { title: '領収書を準備する', isChecked: true },
        { title: 'Vue.jsハンズオンの資料を作る', isChecked: true },
        { title: '参加者の人数を確認する', isChecked: false },
        { title: 'ピザを注文する', isChecked: false },
        { title: '参加費のお釣りを準備する', isChecked: false },
        { title: '会場設営をする', isChecked: false },
    ]
  },
})