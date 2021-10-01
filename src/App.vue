<template>
  <div class="container mx-auto">
    <div class="flex flex-col-reverse">
      <template v-for="(message, messageIndex) in messages" :key="messageIndex">
        <div class="whitespace-pre">[POST] {{ message }}</div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { onSnapshot } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { db } from "./modules/firebase"

const messages = ref([] as string[])

const { searchParams } = new URL(location.href)
const channel = searchParams.get('channel')

if (channel) {
  const q = query(collection(db, "logs"), where("channel", "==", channel));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const datas = [] as string[];
    querySnapshot.forEach((doc) => {
      datas.push(doc.data().body);
    });
    console.log(datas)
    messages.value = datas
  });

  onUnmounted(() => {
    unsubscribe()
  })
}
</script>
