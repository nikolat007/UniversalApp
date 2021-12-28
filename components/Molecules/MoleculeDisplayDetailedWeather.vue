<template>
    <div class="flex justify-center items-center flex-wrap">
        <MoleculeDailyWeather v-for="(daily, index) in detailedWeatherData.daily" :key="index" :details="daily"/>
    </div>
</template>

<script>

import MoleculeDailyWeather from '../Molecules/MoleculeDailyWeather.vue'
import MoleculeWeatherVideos from '../Molecules/MoleculeWeatherVideos.vue'

export default {
    name: "MoleculeDisplayDetailedWeather",
    components: {
        MoleculeDailyWeather,
        MoleculeWeatherVideos
    },
    props: [
        "detailedWeatherData"
    ]
}
</script>