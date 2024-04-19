export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore()

    if (await authStore.isAuthed()) return navigateTo('/')
})