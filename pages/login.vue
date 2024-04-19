<template>
    <div class="Login m-auto mt-5 max-w-[400px] flex flex-col items-center gap-5">
        <h2 class="font-bold text-xl">Log in</h2>
        <form @submit.prevent="handleSubmit" class="flex flex-col items-center gap-5 w-full">
            <div class="flex flex-col gap-1 w-full">
                <label for="email" class="font-medium">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    class="
                        w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded-xl
                        outline-none
                    "
                    v-model="formData.email"
                />
                <span class="text-sm text-red-500">{{ formErrors.email[0] }}</span>
            </div>
            <div class="flex flex-col gap-1 w-full">
                <label for="password" class="font-medium">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    class="
                        w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded-xl
                        outline-none
                    "
                    v-model="formData.password"
                />
                <span class="text-sm text-red-500">{{ formErrors.password[0] }}</span>
            </div>
            <button
                type="submit"
                class="
                    text-md font-bold w-full p-2 rounded-xl 
                    bg-white cursor-pointer flex justify-center
                    items-center
                "
                :disabled="isLoading"
            >
                <span v-if="!isLoading">Log in</span>
                <UILoader width="30" v-else />
            </button>
        </form>
        <NuxtLink to="/" class="text-gray-500 text-sm">Forgot your password?</NuxtLink>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: [
        'guest',
    ],
})

const authStore = useAuthStore()
const formData = ref({
    email: '',
    password: '',
})
const currentFormErrors = ref({
    email: [],
    password: [],
})
const formErrors = ref(currentFormErrors.value)
const isLoading = ref(false)

const handleSubmit = async () => {
    isLoading.value = true
    formErrors.value = currentFormErrors.value
    const errors = await authStore.login(formData.value)
    isLoading.value = false
    
    formErrors.value = {
        email: errors?.email ?? [],
        password: errors?.password ?? [],
    }
}
</script>