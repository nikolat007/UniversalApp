<template>
    <div>
        <p class="mt-5 text-left font-bold p-2 bg-green-500 text-white rounded">Todo list:</p>
        <AtomTodoListItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" />
    </div>
</template>

<script>
import AtomTodoListItem from '../Atoms/AtomTodoListItem.vue'

export default {
    name: "MoleculeTodoList",
    components: {
        AtomTodoListItem
    },
    computed: {
        todos() {
            return this.$store.getters['todo/getTodos']
        }
    }
}
</script>