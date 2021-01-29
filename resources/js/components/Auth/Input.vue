<template>

</template>

<script>
export default {
    name: "Input",
    props: ["error", "label", "type", "value"],
    emits: ['update:modelValue'],
    methods: {
        updateValue(value) {
            this.$emit("update:modelValue", value)
        }
    }
}
</script>

<style scoped>
</style>
