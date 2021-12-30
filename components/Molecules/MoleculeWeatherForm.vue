<template>
    <div class="container-xl mt-20">
        <div class="w-96 mb-5">
            <h1 class="font-bold text-3xl mb-5 w-full text-center" :class="getWeatherType ? 'text-white' : ''"><span class="text-cyan-500">Search</span> here</h1>
            <form class="relative" action="" @submit.prevent="submitHandle">
                <input list="cities" class="border rounded h-10 p-2 w-full bg-slate-100 outline-none" type="text" name="city" autocomplete="off" placeholder="City name..." v-model="citySearch" @input="getCities">
                <datalist id="cities" v-if="filteredCities && toggleList==true" class="bg-white border border-gray-100 w-full mt-2 absolute rounded max-h-96 overflow-y-auto overflow-x-hidden">
                    <option v-for="(city, index) in filteredCities" :key="index" @keypress.enter="selectCity(city.name)" class="pl-8 pr-2 py-1 relative cursor-pointer hover:bg-blue-200 hover:text-gray-900 rounded">
                        {{ city.name }}, {{ city.country }}
                    </option>
                </datalist>
                <input class="bg-blue-500 text-white rounded p-2 mt-5 w-full cursor-pointer" type="submit" value="Search">
                <button class="bg-blue-500 text-white rounded p-2 mt-5 w-full cursor-pointer" @click="getCurrentLocation">Current location</button>
            </form>
        </div>
    </div>
</template>

<script>

import cities from 'cities.json'

export default {
    name: "MoleculeWeatherForm",
    data() {
        return {
            citySearch: null,
            weatherData: [],
            errors: [],
            filteredCities: null,
            toggleList: false,
            currentLocationDetected: false
        }
    },
    methods: {
        getWeatherData() {
            if (this.citySearch !== null){
                let apiKey = "8ad352a306d572e1f13be52f7a4c4b5c"
                fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.citySearch + "&appid=" + apiKey + "&units=metric", {
                    method: "GET"
                })
                .then(response => response.json())
                .then(data => {
                    this.weatherData = data;
                    this.setStateWeatherType(this.weatherData.weather[0].main);
                    this.$store.dispatch('weather/setWeather', data);
                    this.toggleList = false;
                })
                .catch(errors => {
                    console.log(errors);
                    this.$emit('weatherData', []);
                    this.$store.dispatch('weather/setWeather', null);
                    this.setStateWeatherType(null);
                })
            }
        },
        getCurrentLocation() {
            fetch("https://geolocation-db.com/json/", {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                this.selectCity(data.city);
                this.getWeatherData();
                this.currentLocationDetected = true;
            })
            .catch(error => {
                console.log(error);
                this.currentLocationDetected = false;
            })
        },
        submitHandle() {
            this.getWeatherData();
        },
        getCities() {
            if (this.citySearch.length > 2) {
                let filteredCities = cities.filter(city => city.name.includes(this.citySearch));
                this.filteredCities = filteredCities
                this.filteredCities = this.filteredCities.splice(0, 10);
                this.toggleList = true;
            }
            else {
                this.filteredCities = null;
                this.toggleOff();
            }
        },
        selectCity(value) {
            this.citySearch = value;
        },
        toggleOff() {
            this.toggleList = false;
        },
        setStateWeatherType(type) {
            this.$store.dispatch('weather/setWeatherType', type);
        }
    },
    computed: {
        getWeatherType() {
            return this.$store.getters['weather/getWeatherType'];
        }
    }
}
</script>
