<template>
    <div id="responsiveVideoWrapper" class="absolute inset-0  -z-50 brightness-[.3]">
        <video v-for="(type, index) in weatherTypes" :key="index" autoplay muted loop id="myVideo" class="h-full w-full object-cover" :class="getWeatherType==type ? '' : 'hidden'">
            <source :src="require(`~/assets/videos/${type}.mp4`)" type="video/mp4">
        </video>
    </div>
</template>

<script>

export default {

    name: "MoleculeWeatherVideos",
    data() {
        return {
            weatherTypes: [
                "Clear",
                "Clouds",
                "Drizzle",
                "Haze",
                "Rain",
                "Snow",
                "Thunderstorm",
                "Smoke",
                "Mist"
            ]
        }
    },
    computed: {
        getWeatherType() {
            return this.$store.getters['weather/getWeatherType'];
        }
    }
    // COMPOSITION API VERSION
    // setup() {
    //     const weatherTypes = ref([
    //         "Clear",
    //         "Clouds",
    //         "Drizzle",
    //         "Haze",
    //         "Rain",
    //         "Snow",
    //         "Thunderstorm",
    //         "Smoke"
    //     ]);

    //     const getWeatherType = computed(() => {
    //         return store.getters['weather/getWeatherType'];
    //     });

    //     return { weatherTypes, getWeatherType };
    // }
}
</script>
