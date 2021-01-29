<template>
  <component :is="layout"></component>
</template>

<script>
import MainLayout from './layouts/MainLayout'
export default {
    name: "App",
    computed: {
        layout() {
        return this.$route.meta.layout + "Layout";
        },
    },
    data: () => ({
        initiated: false,
        user : null
    }),
    async mounted(){
        await this.init()
    },
    methods: {
        async init() {
            await axios.get('/api/auth/init').then((res)=>{
                this.user = res.data.user
                this.initiated = true
            })
        }
    },
    components: {
        MainLayout
    },
};
</script>
