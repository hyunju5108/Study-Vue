<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addtn fas fa-plus" aria-hidden="true"></i>
        </span>

        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고</h3>
            <span slot="footer" @click="showModal = false">
                할 일을 입력하세요.
                <i class="closeModalBtn fas fa-times" area-hidden="true"></i>
            </span>

        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data: function() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods : {
        addTodo: function() {
            // console.log(this.newTodoItem);
            // 로컬 스토리지에 저장
            // localStorage.setItem(this.newTodoItem, this.newTodoItem); // key, value
            if(this.newTodoItem !== "") {
                var value = this.newTodoItem && this.newTodoItem.trim();
                //localStorage.setItem(value, value);
                this.$emit('addTodo', value);       // 상위 컴포넌트로 value 인자 전달
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    },

    components: {
        Modal: Modal
    }
}
</script>

<style>
input:focus{
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
</style>
