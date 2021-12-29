<template>
    <div>
        <MoleculeNavigation />
        <OrganismDetailedWeather />
    </div>
</template>

<script>

import MoleculeNavigation from '../components/Molecules/MoleculeNavigation.vue'
import OrganismDetailedWeather from '../components/Organisms/OrganismDetailedWeather.vue'

export default {
    name: "detailed",
    components: {
        MoleculeNavigation,
        OrganismDetailedWeather
    },
    middleware({ store, redirect }) {
        if(!store.getters['weather/getWeather']){
            return redirect('/')
        }
    },
    computed: {
        getWeatherData() {
            return this.$store.getters['weather/getWeather'];
        }
    }
}
</script>