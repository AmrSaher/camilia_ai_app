<template>
    <div class="SignUp m-auto my-5 max-w-[400px] flex flex-col items-center gap-5">
        <h2 class="font-bold text-xl">Sign up</h2>
        <form @submit.prevent="" class="flex flex-col items-center gap-5 w-full">
            <div class="flex flex-col gap-1 w-full">
                <label for="username" class="font-medium">Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    class="
                        w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded-xl
                        outline-none
                    "
                />
            </div>
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
            <div class="flex flex-col gap-1 w-full">
                <label for="cpassword" class="font-medium">Confirm password</label>
                <input
                    type="password"
                    id="cpassword"
                    placeholder="Confirm Password"
                    class="
                        w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded-xl
                        outline-none
                    "
                />
            </div>
            <input type="submit" value="Sign up" class="text-md font-bold w-full p-2 rounded-xl bg-white cursor-pointer">
        </form>
        <p class="text-gray-500 text-sm">
            By clicking Register, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
        </p>
    </div>
</template>