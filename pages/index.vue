<template>
    <div class="w-full h-[100vh] relative">
        <MoleculeWeatherVideos />
        <div class="flex flex-col justify-center items-center">
            <MoleculeNavigation />
            <OrganismWeather />
        </div>
    </div>
</template>

<script>

import MoleculeWeatherVideos from '../components/Molecules/MoleculeWeatherVideos.vue'
import MoleculeNavigation from '../components/Molecules/MoleculeNavigation.vue'
import OrganismWeather from '../components/Organisms/OrganismWeather.vue'

export default {
    layout: 'custom',
    name: "weatherPage",
    components: {
        MoleculeWeatherVideos,
        MoleculeNavigation,
        OrganismWeather
    }
}
</script>
