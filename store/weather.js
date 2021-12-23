import { mapGetters } from 'vuex'

export const state = () => ({
    weatherType: null,
})

export const mutations = {
    SET_WEATHER_TYPE (state, weather) {
        state.weatherType = weather;
    }
}

export const actions = {
    setWeatherType(context, weather) {
        context.commit('SET_WEATHER_TYPE', weather);
    }
}

export const getters = {
    getWeatherType(state) {
        return state.weatherType;
    }
}

export const computed = {
    ...mapGetters([
        'getWeatherType'
    ])
}