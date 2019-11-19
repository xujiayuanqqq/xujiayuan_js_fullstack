<template>
    <div>
      <div class="mpvue-demo">
        <p class="title">{{title}}</p>
        <p>{{mytodo}}</p>
        <input type="text" v-model="mytodo">
        <button @click="addTodo">加一条</button>
        <button @click="clearTodo">清空所有</button>

        <ul class="todos">
          <!-- v-for v-key vue 循环指令 in 指定key + index
          ：动态绑定属性 标签或组件的属性是跟data相关 -->
          <li v-bind:key='i' v-for="(todo,i) in todos" :class="{'done':todo.done}" @click="toggle(i)">{{todo.text}}</li>
          <li>{{todoNum}}/{{todos.length}}</li>
        </ul>
      </div>
    </div>
  </template>

  <script>

  export default {
    data () {
      return {
        title: 'Hello mpvue',
        todos: [{
          text: '吃饭',
          done: false,
        },
        {
          text: '睡觉',
          done: false,
        },
        {
          text: '打豆豆',
          done: false,
        }
        ],
        mytodo:'',
      }
    },

    components: {

    },
    computed: {
      todoNum () {
        return this.todos.filter(todo => !todo.done).length;
      }
    },
    methods: {
      addTodo(e) {
        if(!this.mytodo) {
          return;
        }else {
          this.todos.push({text:this.mytodo,done:false});
          this.mytodo = ''
        }
      },
      toggle(i) {
        this.todos[i].done = !this.todos[i].done;
      },
      clearTodo(e) {
        this.todos = [];
      }
    },
    created () {

    }
  }
  </script>

  <style scoped>
    /* 单页面组件开发 */
    .title {
      color: #ed12a3;
      text-align: center;
    }
    ul.todos {
      margin: 20px;

    }
    input {
      border: 2px solid #ed12a3;

    }
    .done {
      text-decoration: line-through;
    }
  </style>
