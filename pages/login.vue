<template>
    <div class="Login m-auto mt-5 max-w-[400px] flex flex-col items-center gap-5">
        <h2 class="font-bold text-xl">Log in</h2>
        <form @submit.prevent="" class="flex flex-col items-center gap-5 w-full">
            <div class="flex flex-col gap-1 w-full">
                <label for="email" class="font-medium">Email or username</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Email or username"
                    class="
                        w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded-xl
                        outline-none
                    "
                />
                <p class="text-sm text-red-500">Invalid email address</p>
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
                />
            </div>
            <input type="submit" value="Log in" class="text-md font-bold w-full p-2 rounded-xl bg-white cursor-pointer">
        </form>
        <NuxtLink to="/" class="text-gray-500 text-sm">Forgot your password?</NuxtLink>
    </div>
</template>