<template>
  <div class="container mx-auto">
    <template v-if="state === 'CONNECTING'">
      <div class="text-gray-500 text-sm">연결중입니다.</div>
    </template>
    <template v-else-if="state === 'DISCONNECTED'">
      <div class="text-red-500 text-sm">연결이 끊어졌습니다.</div>
    </template>
    <div class="flex flex-col-reverse">
      <template v-for="(message, messageIndex) in messages" :key="messageIndex">
        <div class="whitespace-pre">[POST] {{ message }}</div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUpdated, onUnmounted, ref } from 'vue'

const messages = ref([] as string[])
let state = ref('CONNECTING')

onMounted(() => {
  const events = new EventSource("https://notiflow-api.deno.dev/listen?channel=wan2land");
  events.addEventListener("open", () => {
    state.value = 'CONNECTED'
  });
  events.addEventListener("error", () => {
    switch (events.readyState) {
      case EventSource.OPEN:
        state.value = 'CONNECTED'
        break;
      case EventSource.CONNECTING:
        state.value = 'CONNECTING'
        break;
      case EventSource.CLOSED:
        state.value = 'DISCONNECTED'
        break;
    }
  });
  events.addEventListener("message", (e) => {
    messages.value.push(e.data);
  });
})
</script>
