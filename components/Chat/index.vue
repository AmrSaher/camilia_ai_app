<template>
    <ChatBox :isOpened="isOpened" @close="toggle" />
    <button
        class="
            Chat overflow-hidden fixed bottom-7 right-7
            z-40 bg-[#141414] w-12 h-12 rounded-full
            transition-all duration-500 text-white
        "
        :style="isOpened ? 'padding: 0; width: 0; height: 0;' : ''"
        @click="toggle"
    >
        <i class="bi bi-chat"></i>
    </button>
</template>

<script setup>
const isOpened = ref(false);

const toggle = () => {
  isOpened.value = !isOpened.value;
};
</script>