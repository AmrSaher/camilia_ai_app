<template>
    <div class="Tasks">
        <TasksSections />
    </div>
</template>

<script setup>
definePageMeta({
    middleware: [
        'auth',
    ],
})

const isLoading = ref(false)

const { data:tasks , error, refresh } = useAsyncData('tasks', async () => {
    isLoading.value = true
    const { data, error } = await useApi('/tasks', {
        method: 'get',
    }, true)
    isLoading.value = false

    return data.value
})
</script>