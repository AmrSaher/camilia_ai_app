export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore()
    const isAuthed = await authStore.isAuthed()

    if (isAuthed) return navigateTo('/')
})