<template>
    <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// import { library } from '@fortawesome/fontawesome-svg-core'

// import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faHatWizard, FontAwesomeIcon)

export default {
    data() {
        return {
            todoItems: []
        }
    },
    methods: {
        // mutations
        // addTodo(todoItem) {
        //     localStorage.setItem(todoItem, todoItem);    // key, value
        //     this.todoItems.push(todoItem);
        // },
        // clearAll() {
        //     localStorage.clear();
        //     this.todoItems = [];
        // },
        // removeTodo(todoItem, index) {
        //     localStorage.removeItem(todoItem);
        //     this.todoItems.splice(index, 1);
        // }
    },
    components: {
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter
    }
}
</script>

<style>
    body {
        text-align: center;
        background-color: #F6F6F8;
    }
    input {
        border-style: groove;
        width: 200px;
    }
    button {
        border-style: groove;
    }
    .shadow {
        box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
    }
</style>
