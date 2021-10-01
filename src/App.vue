<template>
  <div class="container mx-auto max-w-5xl p-4">
    <div class="flex flex-col-reverse font-mono gap-y-3">
      <template v-for="(log, logIndex) in logs" :key="logIndex">
        <div>
          <div class="text-sm text-gray-400">{{ format(log.created.seconds * 1000, 'yyyy-MM-dd HH:mm:ss') }}</div>
          <div class="text-sm whitespace-pre-line break-all">{{ JSON.stringify(log.body, null, '  ').replace(/ /g, '&nbsp;') }}</div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import format from 'date-fns/format'
import { onSnapshot } from "firebase/firestore";
import { collection, query, where, Timestamp } from "firebase/firestore";
import { db } from "./modules/firebase"

const logs = ref([] as { body: string, created: { seconds: number } }[])

const { searchParams } = new URL(location.href)
const channel = searchParams.get('channel')

if (channel) {
  const date = new Date()
  const q = query(
    collection(db, `channels/${channel}/logs`),
    where("created", ">=", Timestamp.fromDate(date))
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const data = change.doc.data()
        logs.value.push({
          body: JSON.parse(data.body),
          created: data.created,
        });
      }
    });
  });

  onUnmounted(() => {
    unsubscribe()
  })
}
</script>
