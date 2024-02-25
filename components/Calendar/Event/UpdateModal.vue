<template>
    <UIModal title="Update event" @close="emit('close')">
        <form @submit.prevent="handleSubmit" class="flex flex-col items-center gap-5 w-full">
            <div class="flex flex-col gap-1 w-full">
                <label for="title" class="font-medium">Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Title"
                    class="
                        w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded-xl
                        outline-none
                    "
                    v-model="formData.title"
                />
                <span class="text-sm text-red-500">{{ formErrors.title[0] }}</span>
            </div>
            <div class="flex flex-col gap-1 w-full">
                <label for="start" class="font-medium">Start</label>
                <input
                    type="datetime-local"
                    id="start"
                    placeholder="Start"
                    class="
                        w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded-xl
                        outline-none
                    "
                    v-model="formData.start"
                    :max="formData.end"
                />
                <span class="text-sm text-red-500">{{ formErrors.start[0] }}</span>
            </div>
            <div class="flex flex-col gap-1 w-full">
                <label for="end" class="font-medium">End</label>
                <input
                    type="datetime-local"
                    id="end"
                    placeholder="End"
                    class="
                        w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded-xl
                        outline-none
                    "
                    v-model="formData.end"
                    :min="formData.start"
                />
                <span class="text-sm text-red-500">{{ formErrors.end[0] }}</span>
            </div>
            <input type="submit" value="Update" class="text-md font-bold w-full p-2 rounded-xl bg-white cursor-pointer">
        </form>
    </UIModal>
</template>

<script setup>
const { event } = defineProps([
    'event',
])
const emit = defineEmits([
    'close',
    'refresh',
])
const formData = ref({
    title: event.title,
    start: event.start,
    end: event.end,
})
const currentFormErrors = ref({
    title: [],
    start: [],
    end: [],
})
const formErrors = ref(currentFormErrors.value)

const handleSubmit = async () => {
    formErrors.value = currentFormErrors.value
    const { data, error } = await useApi('/events/update/' + event.id, {
        method: 'post',
        body: formData.value,
    }, true)

    // Check if any errors return
    const errors = error?.value?.data?.errors
    if (errors) {
        formErrors.value = {
            title: errors?.title ?? [],
            start: errors?.start ?? [],
            end: errors?.end ?? [],
        }
    } else {
        emit('close')
        emit('refresh')
    }
}
</script>