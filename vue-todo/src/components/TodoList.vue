<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    // data: function() {
    //     return {
    //         todoItems: []
    //     }
    // },
    // App.vue로 이동
    // created: function(){
    //     if(localStorage.length > 0) {
    //         for( var i = 0; i < localStorage.length; i++) {
    //             this.todoItems.push(localStorage.key(i));
    //         }
    //     }
    // },
    methods: {
        removeTodo(todoItem, index) {
            // localStorage.removeItem(todoItem);      // 로컬스토리지에서 삭제
            // this.todoItems.splice(index, 1);
            // -> TodoList 컴포넌트의 각 할 일 아이템을 삭제하는 로직에도 이벤트 전달 방식 적용
            // this.$emit('removeTodo', todoItem, index);
            this.$store.commit('removeTodo', {todoItem, index});
        }
    },
    computed : {
        ...mapGetters([storedTodoItems])
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}

.list-enter-active, .list-leave-active {
    transition: all 1s;
}

.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
