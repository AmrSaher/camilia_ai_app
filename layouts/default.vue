<template>
    <main class="DefaultLayout text-[#141414] font-figtree">
        <MainLoader v-if="loaderStore.isActive" />
        <Chat v-if="isAuthed" />
        <Header />
        <div class="w-full p-4">
            <slot />
        </div>
    </main>
</template>

<script setup>
const loaderStore = useLoaderStore()
const authStore = useAuthStore()
const isAuthed = computed(() => {
    return authStore.getJWTToken() ? true : false
})
</script>