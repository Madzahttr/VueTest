<template>
    <div id="app">
        <AddTodo v-on:add-todo="addTodo" />
        <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    </div>
</template>

<script>
import '../assets/css/main.css'
import axios from 'axios'
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'

export default {
    name: "app",
    components: {
        Todos,
        AddTodo
    },
    data() {
        return {
            todos: []
        }
    },
    methods: {
        deleteTodo(id) {
            axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
            .catch(err => console.log(err))

        },
        addTodo(newTodo) {
            const { title, completed } = newTodo

            axios.post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed
            })
                .then(res => this.todos = [...this.todos, res.data])
                .catch(err => console.log(err))
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => this.todos = res.data)
            .catch(err => console.log(err))
    }
};
</script>