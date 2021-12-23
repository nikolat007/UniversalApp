<template>
    <div class="w-full h-[100vh] relative">
        <div id="responsiveVideoWrapper" class="absolute inset-0  -z-50 brightness-[.3]">
            <video autoplay muted loop id="myVideo" class="h-full w-full object-cover" :class="getWeatherType=='Clouds' ? '' : 'hidden'">
                <source src="_nuxt/assets/videos/Clouds.mp4" type="video/mp4">
            </video>
            <video autoplay muted loop id="myVideo" class="h-full w-full object-cover" :class="getWeatherType=='Clear' ? '' : 'hidden'">
                <source src="_nuxt/assets/videos/Clear.mp4" type="video/mp4">
            </video>
            <video autoplay muted loop id="myVideo" class="h-full w-full object-cover" :class="getWeatherType=='Rain' ? '' : 'hidden'">
                <source src="_nuxt/assets/videos/Rain.mp4" type="video/mp4">
            </video>
            <video autoplay muted loop id="myVideo" class="h-full w-full object-cover" :class="getWeatherType=='Snow' ? '' : 'hidden'">
                <source src="_nuxt/assets/videos/Snow.mp4" type="video/mp4">
            </video>
            <video autoplay muted loop id="myVideo" class="h-full w-full object-cover" :class="getWeatherType=='Thunderstorm' ? '' : 'hidden'">
                <source src="_nuxt/assets/videos/Thunderstorm.mp4" type="video/mp4">
            </video>
            <video autoplay muted loop id="myVideo" class="h-full w-full object-cover" :class="getWeatherType=='Drizzle' ? '' : 'hidden'">
                <source src="_nuxt/assets/videos/Drizzle.mp4" type="video/mp4">
            </video>
            <video autoplay muted loop id="myVideo" class="h-full w-full object-cover" :class="getWeatherType=='Haze' ? '' : 'hidden'">
                <source src="_nuxt/assets/videos/Haze.mp4" type="video/mp4">
            </video>
        </div>
        <div class="flex flex-col justify-center items-center">
            <MoleculeNavigation />
            <OrganismWeather />
        </div>
    </div>
</template>

<script>

import MoleculeNavigation from '../components/Molecules/MoleculeNavigation.vue'
import OrganismWeather from '../components/Organisms/OrganismWeather.vue'

export default {
    layout: 'custom',
    name: "weatherPage",
    components: {
        MoleculeNavigation,
        OrganismWeather
    },
    computed: {
        getWeatherType() {
            return this.$store.getters['weather/getWeatherType'];
        }
    }
}
</script>
