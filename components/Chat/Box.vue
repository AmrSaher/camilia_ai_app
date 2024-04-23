<template>
    <div
    class="ChatBotChatBox overflow-hidden fixed bottom-7 right-7 max-sm:bottom-0 max-sm:right-0 w-[400px] h-[600px] max-sm:w-full max-sm:h-full bg-[#dfdfdfc2] transition-all rounded-lg z-50 border border-[#b1b1b1] duration-500 backdrop-blur-sm"
    :style="!isOpened ? 'width: 0; height: 0; border: 0;' : ''"
  >
    <header
      class="absolute top-0 left-0 w-full px-3 h-[80px] flex items-center justify-between bg-[#141414] rounded-tl-lg rounded-tr-lg text-white"
    >
      <div>
        <h3 class="font-medium">Camilia</h3>
        <p class="font-light text-sm tracking-wider">Ask me any thing</p>
      </div>
      <button
        class="w-10 h-10 flex justify-center items-center rounded-md transition-colors hover:bg-[#3d3d3d]"
        @click="close"
      >
        <i class="bi bi-x text-2xl"></i>
      </button>
    </header>
    <div
      class="absolute top-[80px] left-0 w-full h-[calc(100%-80px)] rounded-bl-lg rounded-br-lg flex flex-col justify-between"
    >
      <div class="flex flex-col gap-2 p-2 overflow-y-auto" ref="chatBox">
        <p class="w-full flex" :style="`justify-content: ${msg.role == 'user' ? 'end' : 'start'}`" v-for="msg in messages" :key="msg">
          <span
            class="p-2 rounded-md"
            :style="`background: ${msg.role == 'user' ? '#141414' : '#fff'}; color: ${msg.role == 'user' ? '#fff' : '#141414'}`"
            >{{ msg.content }}</span>
        </p>
      </div>
      <form @submit.prevent="submitMessage" class="w-full relative flex justify-between items-center p-2 gap-3">
        <input
            type="text"
            placeholder="Message Camilia..."
            class="
                w-full bg-[#FAFAFA] border border-gray-200 p-3 rounded-xl
                outline-none pr-[5.5rem]
            "
            v-model="message"
        />
        <button class="bg-[#141414] w-9 h-9 rounded-full
            transition-all duration-500 text-white absolute top-[50%] -translate-y-1/2 right-14" type="submit">
            <i class="bi bi-send text-sm"></i>
        </button>
        <button class="bg-[#141414] w-9 h-9 rounded-full
            transition-all duration-500 text-white absolute top-[50%] -translate-y-1/2 right-4" @click="record" type="button">
            <i class="bi bi-stop-fill text-sm" v-if="isRecording"></i>
            <i class="bi bi-mic text-sm" v-else></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const { isOpened } = defineProps([
    'isOpened'
])
const emit = defineEmits([
    'close'
])
const chatBox = ref()
const promptsStore = usePromptsStore()
const isRecording = ref(false)
const message = ref('')
const isAskingAI = ref(false)
let recognition = null
let speech = null
const { data:messages , error } = useAsyncData('messages', async () => {
    const { data, error } = await useApi('/messages', {}, true)
    return data.value
})

watch(messages.value, () => setTimeout(() => scrollDownChatBox(), 10))

onMounted(() => {
    window.SpeechRecognition = window.webkitSpeechRecognition
    recognition = new window.SpeechRecognition()
    recognition.interimResults = true

    recognition.addEventListener('result', e => {
        const text = Array.from(e.results)
            .map(res => res[0])
            .map(res => res.transcript)

        message.value = text[0]
    })
    recognition.addEventListener('end', async () => {
        isRecording.value = false
        if (!message.value.trim()) return
        messages.value.push({
            content: message.value.trim(),
            role: 'user',
        })
        message.value = ''
        await storeMessage()
        await askAI()
    })

    speech = new window.SpeechSynthesisUtterance()
    // let voices = window.speechSynthesis.getVoices()

    window.speechSynthesis.onvoiceschanged = () => {
        let voices = window.speechSynthesis.getVoices()

        let voice = voices.find(voice => voice.name === 'Microsoft Sonia Online (Natural) - English (United Kingdom)')

        if (voice) {
            speech.voice = voice
        } else {
            console.error('Camilia voice does not exist!')
        }
    }
})

const close = () => emit('close')
const record = () => {
    if (isRecording.value || isAskingAI.value) return
    isRecording.value = true
    recognition.start()
}
const submitMessage = async () => {
    if (!message.value.trim()) return
    messages.value.push({
        content: message.value.trim(),
        role: 'user',
    })
    message.value = ''
    await storeMessage()
    await askAI()
}
const askAI = async () => {
    isAskingAI.value = true
    const { LLM_API_URL, LLM_API_KEY } = useRuntimeConfig().public
    const { data } = await useFetch(LLM_API_URL, {
        method: 'post',
        watch: false,
        body: {
            "model": "meta-llama/Llama-3-8b-chat-hf",
            "max_tokens": 512,
            "temperature": 0.7,
            "top_p": 0.7,
            "top_k": 50,
            "repetition_penalty": 1,
            "stop": [
                "<|eot_id|>"
            ],
            "messages": [
                {
                    content: promptsStore.MAIN_PROMPT,
                    role: 'user',
                },
                ...messages.value,
            ],
        },
        headers: {
            Authorization: 'Bearer ' + LLM_API_KEY,
        },
    })
    const msg = data.value.choices[0].message
    const messageContent = msg.content
    if (messageContent[0] == '{') {
        let appointment = JSON.parse(messageContent)
        console.log(appointment)
        messages.value.push({
            content: 'Appointment booked successfully!',
            role: 'assistant',
        })
        await useApi('/events', {
            method: 'post',
            body: {
                title: appointment.name,
                start: appointment.start,
                end: appointment.end,
            },
        }, true)
    } else {
        messages.value.push(msg)
    }
    await storeMessage()
    say(messages.value[messages.value.length - 1].content)
    isAskingAI.value = false
}
const say = (text) => {
    speech.text = text
    window.speechSynthesis.speak(speech)
}
const scrollDownChatBox = () => {
    chatBox.value.scrollTop = chatBox.value.scrollHeight
}
const storeMessage = async () => {
    await useApi('/messages', {
        method: 'post',
        body: messages.value[messages.value.length - 1],
    }, true)
}
</script>