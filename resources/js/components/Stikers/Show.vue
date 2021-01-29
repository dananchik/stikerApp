<template>
  <div>
  <h2>{{ STIKER.title }}</h2>
  <p>{{ STIKER.id }}</p>
  <p>{{ STIKER.description }}</p>
  <img src="/images/32d298631d2e08483ebf7f1cd8bdf9e5.png" alt="">
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "StikerShow",
  methods:mapActions(["LOADSTIKER"]),
  computed:{
      ...mapGetters(["STIKER"]),
  },
  async mounted(){
      let id = this.$route.params.id
      await this.LOADSTIKER(id)
  }

};
</script>

<style></style>
