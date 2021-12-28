<template>
    <div class="rounded p-5 m-1 shadow-md" style="background-color: rgb(255, 255, 255, 20%);">
        <h1 class="m-2 text-center font-bold text-white"> {{ getDayName(details.dt) }} </h1>
        <img class="mx-auto h-10 w-10 bg-slate-300 rounded" :src="'http://openweathermap.org/img/wn/' + details.weather[0].icon + '@4x.png'" alt="icon">
        <p class="m-2 text-center text-white"> ( {{ details.weather[0].main }} ) </p>
        <p class="m-2 text-center font-bold text-white">Max:</p>
        <p class="m-2 text-center text-white"> {{ getIntTemperature(details.temp.max) }} °C</p>
        <p class="m-2 text-center font-bold text-white">Min:</p>
        <p class="m-2 text-center text-white"> {{ getIntTemperature(details.temp.min) }}  °C</p>
        <p class="m-2 text-center font-bold text-white">Humidity:</p>
        <p class="m-2 text-center text-white"> {{ details.humidity }} %</p>
        <p class="m-2 text-center font-bold text-white">Wind:</p>
        <p class="m-2 text-center text-white"> {{ details.wind_speed }} m/s</p>
    </div>
</template>

<script>
export default {
    name: "MoleculeDailyWeather",
    props: [
        "details"
    ],
    data() {
        return {
            days: [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ]
        }
    },
    methods: {
        getDayName(date) {
            let getDate = new Date(date*1000);
            let numberOfDay = getDate.getDay();
            return this.days[numberOfDay];
        },
        getIntTemperature(temperature) {
            let number = temperature;
            let intTemperature = Math.floor(number)
            return intTemperature;
        }
    }
}
</script>