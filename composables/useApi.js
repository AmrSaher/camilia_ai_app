export const useApi = async (url, options = {}, authRequired = false) => {
    const authStore = useAuthStore()
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    if (authRequired) headers['Authorization'] = 'Bearer ' + authStore.getJWTToken()

    const { BASE_API_URL } = useRuntimeConfig().public

    return await useFetch(BASE_API_URL + url, {
        watch: false,
        ...options,
        headers: {
            ...headers,
            ...options?.headers,
        },
    })
}