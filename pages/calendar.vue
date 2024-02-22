<template>
    <div class="Calendar">
        <UIContainer class="">
            <div class="w-full mb-5">
                <h2 class="font-bold text-3xl mb-5">February 2024</h2>
                <div class="max-w-96 mx-auto">
                    <DatePicker
                        borderless
                        transparent
                        mode="date"
                        expanded
                    />
                </div>
            </div>
            <div class="w-full">
                <header class="w-full flex items-center justify-between mb-4">
                    <h2 class="text-xl font-bold">Events</h2>
                    <button class="bg-[#EEEEEE] text-sm font-bold px-3 py-2 rounded-lg">Add event</button>
                </header>
                <ul class="flex flex-col gap-3">
                    <li class="flex items-center gap-3">
                        <img
                            src="https://th.bing.com/th/id/OIP.VTLfXQOfRqTa5mKBo8-XYQHaHa?rs=1&pid=ImgDetMain"
                            alt="event image"
                            class="w-20 h-20 object-fit rounded-md"
                        />
                        <div class="flex flex-col">
                            <h3 class="text-md font-bold">Product review meeting</h3>
                            <span class="text-sm text-gray-500">10:00am - 11:00am</span>
                        </div>
                    </li>
                    <li class="flex items-center gap-3">
                        <img
                            src="https://th.bing.com/th/id/OIP.06603hEiUDzfHFXaEdm0PQHaHa?pid=ImgDet&w=207&h=207&c=7"
                            alt="event image"
                            class="w-20 h-20 object-fit rounded-md"
                        />
                        <div class="flex flex-col">
                            <h3 class="text-md font-bold">Deploy project on netlify</h3>
                            <span class="text-sm text-gray-500">11:00am - 02:00pm</span>
                        </div>
                    </li>
                    <li class="flex items-center gap-3">
                        <img
                            src="https://th.bing.com/th/id/OIP.Smfx7YU7mo6eHALIOrQhYAHaHa?pid=ImgDet&w=207&h=207&c=7"
                            alt="event image"
                            class="w-20 h-20 object-fit rounded-md"
                        />
                        <div class="flex flex-col">
                            <h3 class="text-md font-bold">Go to GYM</h3>
                            <span class="text-sm text-gray-500">09:00pm - 11:00pm</span>
                        </div>
                    </li>
                </ul>
            </div>
        </UIContainer>
    </div>
</template>
  
<script setup>
import { DatePicker } from 'v-calendar'
import 'v-calendar/style.css'

definePageMeta({
    middleware: [
        'auth',
    ],
})
</script>