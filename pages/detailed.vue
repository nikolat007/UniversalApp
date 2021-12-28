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
    }
}
</script>