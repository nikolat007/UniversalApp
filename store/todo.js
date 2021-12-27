import { mapGetters } from 'vuex'

export const state = () => ({
    todos:[],
    search: null,
    weather: []
})
export const mutations = {
    ADD_TODO (state, todo) {
        state.todos.push({...todo});
    },
    REMOVE_TODO (state, todo) {
        let id = state.todos.indexOf(todo);
        state.todos.splice(id, 1);
    },
    SEARCH_TODO (state, search) {
        state.search = search
    }
}
export const getters = {
    getTodos(state) {
        if(state.search !== null){
            return state.todos.filter(todo => todo.title.includes(state.search));
        }
        else {
            return state.todos;
        }
    }
}
export const actions = {
    addTodo(context, todo) {
        context.commit('ADD_TODO', todo);
    },
    removeTodo(context, todo) {
        context.commit('REMOVE_TODO', todo);
    },
    searchTodo(context, search) {
        context.commit('SEARCH_TODO', search);
    }
}
