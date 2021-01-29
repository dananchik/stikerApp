import axios from "axios"

export default {
    state: {
        user: null
    },
    mutations: {
        SET_NEW_USER(state, user){
            state.user = user
        }
    },
    actions: {
        async LOAD_NEW_USER({commit}, data){
            await axios.post('/api/auth/registr', data).then((res) => {
                commit("SET_NEW_USER",res.data.user)
            }).catch((e) => {
                console.log(e)
            })
        }
    },
    getters: {
        GET_USER(state){
            return {
                ...state.user
            }
        }
    }
}
