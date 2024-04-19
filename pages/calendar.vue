<template>
    <CalendarEventAddModal
        v-if="isAddEventModalOpened"
        @close="toggleAddEventModal"
        @refresh="refresh"
    />
    <div class="Calendar">
        <UIContainer>
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
                        v-for="event in events"
                        :key="event.id"
                        :event="event"
                        v-if="!isLoading"
                        @refresh="refresh"
                    />
                    <UILoader width="35" class="mx-auto" v-if="isLoading" />
                    <p class="text-sm text-gray-500 mx-auto" v-if="!events?.length && !isLoading">No events this day</p>
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

const date = ref((new Date()))
const isAddEventModalOpened = ref(false)
const isLoading = ref(false)

const { data:events , error, refresh } = useAsyncData('events', async () => {
    isLoading.value = true
    const { data, error } = await useApi('/events/get', {
        method: 'post',
        body: {
            date: date.value,
        },
    }, true)
    isLoading.value = false

    return data.value
}, {
    watch: [
        date,
    ],
})
const toggleAddEventModal = () => {
    isAddEventModalOpened.value = !isAddEventModalOpened.value
}
</script>