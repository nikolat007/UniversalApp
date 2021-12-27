<template>
    <div class="p-2 rounded-md shadow-xl" style="background-color: rgb(255, 255, 255, 20%);">
        <h2 class="text-center mb-5 mt-5 text-white"><span class="font-bold text-3xl">{{ city.name }}, {{ city.sys.country }}</span> <br> ( {{ city.weather[0].main }} )</h2>
        <div class="flex flex-col">
            <div class="flex w-full">
                <div class="flex 1 w-1/2 h-20 items-center justify-center">
                    <p class="text-white font-bold text-3xl">{{ city.main.temp }} °C </p>
                </div>
                <div class="icon flex flex-1 items-center justify-center border-l mb-5 w-1/2 h-20 mx-auto">
                    <img class="h-20 w-20" :src="'http://openweathermap.org/img/wn/' + city.weather[0].icon + '@4x.png'" alt="weather icon">
                </div>
            </div>
            <div class="flex flex-row">
                <div class="flex-1 h-20 flex items-center justify-center m-1 shadow-md rounded" style="background-color: rgb(255, 255, 255, 10%);">
                    <p class="text-center text-white"><span class="font-bold">Min</span> <br> {{ city.main.temp_min }} °C</p>
                </div>
                <div class="flex-1 h-20 flex items-center justify-center m-1 shadow-md rounded" style="background-color: rgb(255, 255, 255, 10%);">
                    <p class="text-center text-white"><span class="font-bold">Max</span> <br> {{ city.main.temp_max }} °C</p>
                </div>
            </div>
            <div class="flex flex-row">
                <div class="flex-1 h-20 flex items-center justify-center m-1 shadow-md rounded" style="background-color: rgb(255, 255, 255, 10%);">
                    <p class="text-center text-white"><span class="font-bold">Humidity</span> <br> {{ city.main.humidity }} %</p>
                </div>
                <div class="flex-1 h-20 flex items-center justify-center m-1 shadow-md rounded" style="background-color: rgb(255, 255, 255, 10%);">
                    <p class="text-center text-white"><span class="font-bold">Wind</span> <br> {{ city.wind.speed }} m/s</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoleculeWeatherCity",
    props: [
        "city"
    ]
}
</script>