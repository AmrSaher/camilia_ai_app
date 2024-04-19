import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', () => {
    const isActive = ref(false)

    const startLoading = () => {
        isActive.value = true
    }

    const stopLoading = () => {
        isActive.value = false
    }

    return {
        isActive,
        startLoading,
        stopLoading,
    }
})