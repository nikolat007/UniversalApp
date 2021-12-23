<template>
    <div class="p-3 mb-20 shadow-md w-full flex items-center justify-between bg-white">
        <h1 class="text-3xl">Universal App</h1>
        <div>
        <nuxt-link to="/">Todo App</nuxt-link>
        <nuxt-link class="ml-5" to="/weatherPage">Weather App</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoleculeNavigation"
}
</script>