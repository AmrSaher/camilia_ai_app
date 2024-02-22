<template>
    <CalendarAddEventModal v-if="isAddEventModalOpened" @close="toggleAddEventModal" />
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
                        v-model="date"
                    />
                </div>
            </div>
            <div class="w-full">
                <header class="w-full flex items-center justify-between mb-4">
                    <h2 class="text-xl font-bold">Events</h2>
                    <button
                        class="bg-[#EEEEEE] text-sm font-bold px-3 py-2 rounded-lg"
                        @click="toggleAddEventModal()"
                    >Add event</button>
                </header>
                <ul class="flex flex-col gap-3">
                    <CalendarEvent
                        :event="{
                            title: 'Product review meeting',
                        }"
                    />
                    <!-- <p class="text-sm text-gray-500 mx-auto">No events today</p> -->
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

const date = ref((new Date()).toLocaleDateString('en-US'))
const isAddEventModalOpened = ref(false)

const toggleAddEventModal = () => {
    isAddEventModalOpened.value = !isAddEventModalOpened.value
}
</script>