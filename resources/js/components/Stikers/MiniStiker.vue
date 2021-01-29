<template>
    <div>
        <h2>{{ title }}</h2>
        <div>{{ description }}</div>
        <router-link :to="{ name:'StikerShow', params:{
            id: id
        }}">Перейти</router-link>
    </div>
</template>

<script>
export default {
    name: "MiniStiker",
    props:{
        title: String,
        description: String,
        id: Number
    }
}
</script>

<style>

</style>
