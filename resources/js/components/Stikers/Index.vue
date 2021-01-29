<template>
    <div class="stikers">
        <mini-stiker v-for="stiker in STIKERS" :title="stiker.title" :description="stiker.description" :key="stiker.id" :id="stiker.id" />
    </div>
</template>

<script>
import MiniStiker from './MiniStiker.vue';
import { mapGetters, mapActions } from 'vuex';
    export default {
    components: { MiniStiker },
        name: "StikerIndex",
        mounted() {
            this.LOADSTIKERS();
        },
        computed: mapGetters(["STIKERS"]),
        methods:mapActions(["LOADSTIKERS"])
    };
</script>

<style></style>
