<template>
    <main class="text-[#141414] font-figtree">
        <MainLoader v-if="loaderStore.isActive" />
        <Header />
        <div class="w-full p-4">
            <slot />
        </div>
    </main>
</template>

<script setup>
const loaderStore = useLoaderStore()
</script>