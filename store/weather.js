import { mapGetters } from 'vuex'

export const state = () => ({
    weatherType: null,
    detailedWeatherData: null,
    weatherData: null
})

export const mutations = {
    SET_WEATHER_TYPE (state, weather) {
        state.weatherType = weather;
    },
    SET_DETAILED_WEATHER (state, data) {
        state.detailedWeatherData = data
    },
    SET_WEATHER (state, data) {
        state.weatherData = data
    }
}

export const actions = {
    setWeatherType(context, weather) {
        context.commit('SET_WEATHER_TYPE', weather);
    },
    setDetailedWeather(context, data) {
        context.commit('SET_DETAILED_WEATHER', data);
    },
    setWeather(context, data) {
        context.commit('SET_WEATHER', data);
    }
}

export const getters = {
    getWeatherType(state) {
        return state.weatherType;
    },
    getDetailedWeatherData(state) {
        return state.detailedWeatherData;
    },
    getWeather(state) {
        return state.weatherData;
    }
}
