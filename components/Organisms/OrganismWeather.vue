<template>
    <div>
        <MoleculeWeatherForm />
        <MoleculeWeatherCity />
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
    }
}
</script>
