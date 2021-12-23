<template>
    <form class="flex mt-5">
        <input class="p-2 w-full border rounded" type="text" name="search" placeholder="Search your todo" v-model="search">
    </form>
</template>

<script>
export default {
    name: "MoleculeTodoSearch",
    computed: {
        search: {
            set(search) {
                this.$store.dispatch('todo/searchTodo', search)
            },
            get() {
                return this.$store.state.search
            }
        }
    }
}
</script>