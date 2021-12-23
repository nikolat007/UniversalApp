<template>
  <div class="flex flex-col justify-center items-center">
    <MoleculesMoleculeNavigation />
    <OrganismTodo />
  </div>
</template>

<script>

import MoleculeNavigation from '../components/Molecules/MoleculeNavigation.vue'
import OrganismTodo from '../components/Organisms/OrganismTodo.vue'

export default {
  name: 'IndexPage',
  components: {
    MoleculeNavigation,
    OrganismTodo
  },
  layout(context) {
    return 'custom'
  }
}
</script>
