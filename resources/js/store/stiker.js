export default {
    state: {
        stikers: [],
        stiker: []
    },
    mutations: {
        SETSTIKERS(state,stikers){
            state.stikers = stikers
        },
        SETSTIKER(state,stiker){
            state.stiker = stiker
        }
    },
    actions: {
        async LOADSTIKERS(ctx){
            await axios.get('/api/stikers').then((res) => {
                ctx.commit("SETSTIKERS", res.data)
            })
        },
        async LOADSTIKER({commit}, id){
            await axios.get('/api/stikers/'+ id).then((res) => {
                console.log(res.data.stiker)
                commit("SETSTIKER", res.data.stiker)
            })
        },
        async EDIT_STIKER({commit} , data) {
            axios.put('/api/stikers/' + data.id + '/edit',data).then((res) => {
                console.log(res.data)
            })
        }
    },
    getters: {
        STIKERS(state){
            return state.stikers
        },
        STIKER(state){
            return {
                ...state.stiker
            };
        }
    }
}
