<template>
    <div class="todo container-xl">
        <MoleculeTodoForm />
        <MoleculeTodoSearch />
        <MoleculeTodoList />
    </div>
</template>

<script>

import MoleculeTodoList from '../Molecules/MoleculeTodoList.vue'
import MoleculeTodoSearch from '../Molecules/MoleculeTodoSearch.vue'
import MoleculeTodoForm from '../Molecules/MoleculeTodoForm.vue'

export default {
    name: 'OrganismTodo',
    components: {
        MoleculeTodoForm,
        MoleculeTodoSearch,
        MoleculeTodoList
    }
}

</script>
