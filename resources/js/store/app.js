export default {
    state: {
        loading: false,
        dropdown: false
    },
    mutations: {
        SET_LOADING(state){
            state.loading = !state.loading
        },
        SET_DROPDOWN(state){
            state.dropdown = !state.dropdown
        }
    },
    actions: {
        async LOADING({commit}){
            commit("SET_LOADING")
        },
        async DROPDOWN({commit}){
            commit("SET_DROPDOWN")
        }
    },
    getters: {
        GET_LOADING(state){
            return state.loading
        },
        GET_DROPDOWN(state){
            return state.dropdown
        }
    }
}
