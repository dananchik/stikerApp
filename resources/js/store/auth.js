import axios from "axios"

export default {
    state: {
        user: null,
        token: localStorage.getItem('auth') || ''
    },
    mutations: {
        SET_NEW_USER(state, user){
            state.user = user
        },
        SET_TOKEN(state,token){
            localStorage.setItem('auth', token)
            state.token = token
            console.log('ok')
        },
        CLEAR_TOKEN(state){
            localStorage.removeItem('auth')
            state.token = ''
        }
    },
    actions: {
        async LOAD_NEW_USER({commit}, data){
            await axios.post('/api/auth/registr', data).then((res) => {
                commit("SET_NEW_USER",res.data.user)
            }).catch((e) => {
                console.log(e)
            })
        },
        async LOGIN_USER({commit} , data){
            await axios.post('/api/auth/login', data).then((res) => {
                    commit("SET_TOKEN", res.data.access_token)
                    commit("SET_NEW_USER", res.data.user)

                }).catch((e) => {
                    consple.log(e)
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
