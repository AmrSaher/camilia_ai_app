<template>
    <li
        class="
            p-2 rounded-md hover:bg-[#EDEDED] 
            transition-colors cursor-pointer
        "
        :style="active ? 'background: #EDEDED' : ''"
    >
        {{ text }}
    </li>
</template>

<script setup>
const { active, text } = defineProps([
    'active',
    'text',
])
</script>