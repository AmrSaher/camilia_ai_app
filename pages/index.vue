<template>
    <p>Hello, World!</p>
</template>

<script setup>
definePageMeta({
    middleware: [
        'auth',
    ],
})
</script>