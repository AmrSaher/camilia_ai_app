<template>
    <div class="UILoader">
        <img src="~/assets/img/loader.gif" class="mix-blend-multiply" alt="loader" :style="`width: ${width}px`">
    </div>
</template>

<script setup>
const { width } = defineProps([
    'width',
])
</script>