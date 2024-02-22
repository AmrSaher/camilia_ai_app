import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const user = ref({})
    const token = ref({})

    const cacheJWTToken = (jwt) => {
        token.value = jwt
        useCookie('jwt').value = jwt.access_token
    }

    const getJWTToken = () => token.value.access_token ?? useCookie('jwt').value

    const clearJWTToken = () => {
        token.value = {}
        useCookie('jwt').value = null
    }

    const getUser = async () => {
        const { data } = await useApi('/auth/user', {}, true)
        user.value = data.value
    }

    const login = async (credentials) => {
        const { data, error } = await useApi('/auth/login', {
            method: 'post',
            body: credentials,
        })
        
        // Check if any errors return
        if (error?.value?.data?.errors) return error.value.data.errors
        
        cacheJWTToken(data.value)
        navigateTo('/')
    }

    const register = async (payload) => {
        const { data, error } = await useApi('/auth/register', {
            method: 'post',
            body: payload,
        })

        // Check if any errors return
        if (error?.value?.data?.errors) return error.value.data.errors

        cacheJWTToken(data.value)
        navigateTo('/')
    }

    const logout = async () => {
        await useApi('/auth/logout', {
            method: 'post',
        }, true)

        user.value = {}
        clearJWTToken()
        navigateTo('/')
    }

    const isAuthed = () => getJWTToken() ? true : false

    // const updateProfile = async (attrs) => {
    //     const { error } = await useApi('/profile', {
    //         method: 'put',
    //         body: attrs,
    //         headers: {
    //             Authorization: 'Bearer ' + getJWTToken(),
    //         },
    //     })

    //     // Check if any errors return
    //     if (error?.value?.data?.errors) return error.value.data.errors

    //     navigateTo('/')
    // }

    return {
        user,
        getUser,
        login,
        register,
        logout,
        getJWTToken,
        isAuthed,
    }
})