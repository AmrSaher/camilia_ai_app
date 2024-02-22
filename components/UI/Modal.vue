<template>
    <div
        class="
            Modal fixed top-0 left-0 w-full h-full
            bg-[#64748b33] z-50 flex items-center
            justify-center p-4
        "
    >
        <div class="bg-[#FAFAFA] p-4 rounded-lg w-[100%] max-w-[500px]">
            <header class="w-full flex items-center justify-between mb-3">
                <h2 class="text-lg font-bold">{{ title }}</h2>
                <button @click="emit('close')">
                    <i class="bi bi-x text-xl"></i>
                </button>
            </header>
            <div class="w-full">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
const { title } = defineProps([
    'title',
])
const emit = defineEmits([
    'close',
])
</script>