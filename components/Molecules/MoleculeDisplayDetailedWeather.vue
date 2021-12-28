<template>
    <div class="flex justify-center items-center flex-wrap">
        <MoleculeWeatherVideos />
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
    data() {
        return {
            detailedWeatherData: []
        }
    },
    methods: {
        getDetailedWeatherData() {
            const url = "https://api.openweathermap.org/data/2.5/onecall?lat=44.804&lon=20.4651&exclude=hourly,minutely,current&units=metric&appid=";
            const apiKey = "8ad352a306d572e1f13be52f7a4c4b5c"
            fetch(url + apiKey, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                this.detailedWeatherData = data;
            })
        }
    },
    mounted() {
        this.getDetailedWeatherData()
    }
}
</script>