<template>
    <CalendarEventUpdateModal
        :event="event"
        @close="toggleUpdateEventModal"
        v-if="isUpdateEventModalOpened"
        @refresh="emit('refresh')"
    />
    <li class="CalendarEvent w-full flex items-center justify-between">
        <div class="flex items-center gap-3">
            <img
                :src="event.image"
                alt="event image"
                class="w-20 h-20 object-fit rounded-md"
            />
            <div class="flex flex-col">
                <h3 class="text-md font-bold cursor-pointer" @click="toggleUpdateEventModal">{{ event.title }}</h3>
                <span class="text-sm text-gray-500">{{ startTime }} - {{ endTime }}</span>
            </div>
        </div>
        <button @click="handleDeleteSubmit">
            <i class="bi bi-trash3-fill text-red-500 text-xl"></i>
        </button>
    </li>
</template>

<script setup>
import moment from 'moment'

const { event } = defineProps([
    'event',
])
const emit = defineEmits([
    'refresh',
])
const startTime = moment(event.start).format('hh:mm A')
const endTime = moment(event.end).format('hh:mm A')
const isUpdateEventModalOpened = ref(false)

const handleDeleteSubmit = async () => {
    if (confirm('Are you sure?')) {
        await useApi('/events/' + event.id, {
            method: 'delete',
        }, true)
        emit('refresh')
    }
    
}
const toggleUpdateEventModal = () => {
    isUpdateEventModalOpened.value = !isUpdateEventModalOpened.value
}
</script>