// // elはid属性値
// // new VueでVueインスタンスの作成
// const vm = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue.js!',
//     isChecked: true
//   },
// })

// v-for="配列の要素一つ in 配列名"
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
    items: [],
    newItemTitle: '' //追加
  },
  methods: {  //methodsオプションをまるっと追加
    addTodo: function(){
      this.items.push({
        title: this.newItemTitle,
        isChecked: false
      });
      this.newItemTitle = '';
      this.saveTodo();
    },
    deleteTodo: function(){
      this.items = this.items.filter(function (item) {
        return item.isChecked === false;
      });
      this.saveTodo();
    },
    saveTodo: function(){
      localStorage.setItem('items', JSON.stringify(this.items));
    },
    loadTodo: function(){
      this.items = JSON.parse( localStorage.getItem('items') );
      if( !this.items ){
        this.items = [];
      }
    },
  },
  mounted: function(){
    this.loadTodo();
  },
})
