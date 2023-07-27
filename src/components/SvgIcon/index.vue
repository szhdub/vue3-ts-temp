<template>
    <div>
        <svg class="w-10 h-10">
            <use :xlink:href="prefix+name" fill="green" ></use>
        </svg>
    </div>
</template>
<script setup lang='ts'>
defineProps({
    prefix: {
        type: String,
        default: '#icon-'
    },
    name: String,
    color: String
})
</script>
<style scoped>

</style>