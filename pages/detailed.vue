<template>
    <div>
        <MoleculeWeatherVideos />
        <MoleculeNavigation />
        <OrganismDetailedWeather />
    </div>
</template>

<script>

import MoleculeWeatherVideos from '../components/Molecules/MoleculeWeatherVideos.vue'
import MoleculeNavigation from '../components/Molecules/MoleculeNavigation.vue'
import OrganismDetailedWeather from '../components/Organisms/OrganismDetailedWeather.vue'

export default {
    name: "detailed",
    components: {
        MoleculeWeatherVideos,
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