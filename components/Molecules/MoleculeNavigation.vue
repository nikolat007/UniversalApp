<template>
    <div class="p-3 shadow-md w-full flex items-center justify-between bg-white">
        <h1 class="text-3xl font-bold"><span class="text-cyan-500">Weather</span> App</h1>
        <div>
        <nuxt-link to="/">Current</nuxt-link>
        <nuxt-link v-if="getWeatherData" class="ml-5" to="/detailed">Detailed</nuxt-link>
        <!--<nuxt-link class="ml-5" to="/todoPage">Todo App</nuxt-link>-->
        </div>
    </div>
</template>

<script>
export default {
    name: "MoleculeNavigation",
    computed: {
        getWeatherData() {
            return this.$store.getters['weather/getWeather'];
        }
    }
}
</script>