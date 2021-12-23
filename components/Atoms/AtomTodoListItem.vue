<template>
    <div class="p-5 mt-5 border-b-2 w-full flex items-center justify-between">
        <div>
        <p class="text-2xl font-bold text-left">{{ todo.title }}</p>
        <p class="text-left">{{ todo.description }}</p>
        </div>
        <button class="p-1 bg-red-500 text-white rounded text-sm" @click="onRemoveClick(todo)">Remove</button>
    </div>
</template>

<script>
export default {
    name: "AtomTodoListItem",
    props: [
        "todo", "index"
    ],
    methods: {
        onRemoveClick(todo) {
            this.$store.dispatch('todo/removeTodo', todo);
        }
    }
}
</script>