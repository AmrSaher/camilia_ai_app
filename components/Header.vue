<template>
    <header
        class="
            Header sticky top-0 left-0 w-full h-16
            border-b border-gray-200 flex items-center
            justify-between px-5 z-40 bg-[#FAFAFA]
        "
    >
        <NuxtLink
            to="/"
            class="flex items-center gap-2"
        >
            <i class="bi bi-life-preserver text-sm mt-1"></i>
            <h1 class="text-xl font-bold">Camilia AI</h1>
        </NuxtLink>
        <nav
            class="
                flex items-center gap-5 max-sm:fixed
                max-sm:top-20 max-sm:right-5 max-sm:bg-white
                max-sm:p-3 max-sm:rounded-md max-sm:flex-col
                max-sm:min-w-60 max-sm:overflow-hidden transition-all
                max-sm:shadow-sm
            "
            :class="{
                'active-menu': !isActive,
            }"
        >
            <ul
                class="
                    flex items-center gap-5 max-sm:flex-col
                "
                v-if="isAuthed"
            >
                <li>
                    <NuxtLink to="/" class="hover:font-medium transition-all">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/tasks" class="hover:font-medium transition-all">Task Manager</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/calendar" class="hover:font-medium transition-all">Calendar</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="hover:font-medium transition-all">History</NuxtLink>
                </li>
            </ul>
            <ul class="flex items-center gap-5" v-if="!isAuthed">
                <li>
                    <NuxtLink
                        to="/login"
                        class="px-3 py-2 rounded-md bg-white max-sm:bg-[#FAFAFA]"
                    >Login</NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="/signup"
                        class="px-3 py-2 rounded-md bg-white max-sm:bg-[#FAFAFA]"
                    >Signup</NuxtLink>
                </li>
            </ul>
            <ul class="flex items-center gap-5" v-else>
                <li>
                    <a
                        href="#"
                        class="px-3 py-2 rounded-md bg-white max-sm:bg-[#FAFAFA]"
                        @click="handleLogoutSubmit"
                    >Logout</a>
                </li>
            </ul>
            <NuxtLink to="/" v-if="isAuthed">
                <img
                    src="https://www.bing.com/th?id=OIP.w6Cs6qz234c71XloeqKdwgHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                    alt="profile image"
                    class="w-10 h-10 rounded-full object-fit"
                />
            </NuxtLink>
        </nav>
        <button class="hidden max-sm:block" @click="toggleMenu">
            <i class="bi bi-three-dots text-xl"></i>
        </button>
    </header>
</template>

<script setup>
const isActive = ref(false)
const authStore = useAuthStore()
const isAuthed = computed(() => {
    return authStore.getJWTToken() ? true : false
})

const toggleMenu = () => {
    isActive.value = !isActive.value
}

const handleLogoutSubmit = async () => {
    if (confirm('Are you sure?')) await authStore.logout()
}
</script>

<style scoped>
@media (max-width: 639px) {
    .active-menu {
        height: 0;
        padding: 0;
    }
}
</style>