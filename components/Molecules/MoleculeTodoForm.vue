<template>
    <form action="" @submit.prevent="formHandler">
        <p class="bg-red-400 p-2 text-white rounded mb-5" v-if="error">{{ error }}</p>
        <input class="mb-5 w-full h-10 p-2 border rounded" type="text" name="title" placeholder="Todo title..." v-model="todo.title">
        <input class="mb-5 w-full h-10 p-2 border rounded" type="text" name="description" placeholder="Todo description..." v-model="todo.description">
        <br>
        <input class="bg-blue-500 w-full h-10 rounded text-white cursor-pointer" type="submit" name="submit" value="Submit">
    </form>
</template>

<script>

export default {
    name: "MoleculeTodoForm",
    data(){
        return {
            buttonName: "Submit",
            todo: {
                title: null,
                description: null
            },
            error: null
        }
    },
    methods: {
        formHandler() {
            if(this.todo.title !== null && this.todo.description !== null) {
                this.$store.dispatch('todo/addTodo', this.todo);
                this.resetForm();
            }
            else {
                this.error = "Fields cannot be empty!"
            }
        },
        resetForm() {
            this.todo.title = null,
            this.todo.description = null
        }
    }
}
</script>
