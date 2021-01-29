import axios from "axios"

export default {
    state: {
        category : null
    },
    mutations: {
        SET_CATEGORY_STIKERS(state, payload){
            state.stikers = payload.stikers
            state.category = payload.category
        }
    },
    actions: {
        async LOAD_CATEGORY_STIKERS({ commit } , category_id){
            axios.get('/api/categories/' + category_id).then((res) => {
                commit("SET_CATEGORY_STIKERS", res.data)
            }).catch((e) => {
                console.log(e)
            })
        },
        async CREATE_CATEGORY({ commit } , data){
            axios.post('/api/categories/create',data).then((res) => {
                console.log(res.data)
            })
        },
        async EDIT_CATEGORY({commit} , data) {
            axios.put('/api/categories/' + data.id + '/edit',data).then((res) => {
                console.log(res.data)
            })
        }
    },
    getters: {
        CATEGORY_STIKERS(state){
            return {
                ...state.stikers,
            }
        },
        CATEGORY_NAME(state){
            state.category.title
        }
    }
}
