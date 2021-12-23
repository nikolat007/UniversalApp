<template>
    <div>
        <MoleculeWeatherForm @weatherData="setWeatherData"/>
        <MoleculeWeatherCity v-if="weatherData.name" :city="weatherData" />
    </div>
</template>

<script>

import MoleculeWeatherCity from '../Molecules/MoleculeWeatherCity.vue'
import MoleculeWeatherForm from '../Molecules/MoleculeWeatherForm.vue'

export default {
    name: 'OrganismWeather',
    components: {
        MoleculeWeatherCity,
        MoleculeWeatherForm
    },
    data() {
        return {
            weatherData: []
        }
    },
    methods: {
        setWeatherData(data) {
            this.weatherData = data;
        }
    }
}
</script>
