<template>
    <p>Hello, World!</p>
    <!-- <button @click="fetchResponse">Click</button> -->
</template>

<script setup>
definePageMeta({
    middleware: [
        'auth',
    ],
})

// const fetchResponse = async () => {
//     const data = await useFetch('https://api.together.xyz/v1/chat/completions', {
//         method: 'post',
//         watch: false,
//         body: {
//             "model": "meta-llama/Llama-3-8b-chat-hf",
//             "max_tokens": 512,
//             "temperature": 0.7,
//             "top_p": 0.7,
//             "top_k": 50,
//             "repetition_penalty": 1,
//             "stop": [
//                 "<|eot_id|>"
//             ],
//             "messages": [
//                 {
//                 "content": "\"how to prepare for an interview\" If the text indicates booking an appointment return a json that indicate the name of\na appointment and the clock and the day else it was normal chat response on it normally and return direct json without intro and outro",
//                 "role": "user"
//                 }
//             ]
//         },
//         headers: {
//             Authorization: 'Bearer a1f778806521ee5433f331997715ed144bd4b92b3c7031de40f27819e75a5d5e'
//         },
//     })
//     console.log(data.data.value.choices[0].message.content)
// }
</script>