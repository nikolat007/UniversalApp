<template>
    <div>
        <h2 class="text-center text-3xl font-bold mb-5 text-white">{{ getWeatherData.name }}, {{ getWeatherData.sys.country }}</h2>
        <MoleculeDisplayDetailedWeather v-if="detailedWeatherData" :detailedWeatherData="detailedWeatherData"/>
    </div>
</template>

<script>

import MoleculeDisplayDetailedWeather from '../Molecules/MoleculeDisplayDetailedWeather.vue'

export default {
    name: "OrganismDetailedWeather",
    components: {
        MoleculeDisplayDetailedWeather
    },
    data() {
        return {
            lat: null,
            lon: null,
            detailedWeatherData: null
        }
    },
    methods: {
        getDetailedWeatherData(lon, lat) {
            let getlon = lon;
            let getlat = lat;
            const url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + getlat + "&lon=" + getlon + "&exclude=hourly,minutely,current&units=metric&appid=";
            const apiKey = "8ad352a306d572e1f13be52f7a4c4b5c"
            fetch(url + apiKey, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                this.$store.dispatch('weather/setDetailedWeather', data)
                this.detailedWeatherData = data;
            })
        },
        getNewData() {
            let weatherData = this.$store.getters['weather/getWeather'];
            let lon = weatherData.coord.lon;
            let lat = weatherData.coord.lat;
            this.getDetailedWeatherData(lon, lat)
        }
    },
    mounted() {
        this.getNewData();
    },
    computed: {
        getDetailedStateWeatherData() {
            return this.$store.getters['weather/getDetailedWeatherData']
        },
        getWeatherData() {
            return this.$store.getters['weather/getWeather'];
        }
    }
}
</script>