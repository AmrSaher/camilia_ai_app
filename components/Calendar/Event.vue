<template>
    <li class="CalendarEvent flex items-center gap-3">
        <img
            src="https://th.bing.com/th/id/OIP.VTLfXQOfRqTa5mKBo8-XYQHaHa?rs=1&pid=ImgDetMain"
            alt="event image"
            class="w-20 h-20 object-fit rounded-md"
        />
        <div class="flex flex-col">
            <h3 class="text-md font-bold">{{ event.title }}</h3>
            <span class="text-sm text-gray-500">10:00am - 11:00am</span>
        </div>
    </li>
</template>

<script setup>
const { event } = defineProps([
    'event',
])
</script>