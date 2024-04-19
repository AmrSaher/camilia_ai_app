<template>
    <div class="font-medium">
        <header class="flex items-center justify-between w-full">
            <h2 class="text-lg">Sections</h2>
            <button class="text-2xl">
                <i class="bi bi-plus"></i>
            </button>
        </header>
        <ul class="w-full flex flex-col gap-1">
            <TasksSectionsItem
                :active="true"
                text="Today"
            />
            <TasksSectionsItem
                text="Upcoming"
            />
        </ul>
    </div>
</template>