<template>
  <div class="w-full h-full">
    <div class="h-16 bg-white border-b border-gray-100">
      <div class="container mx-auto max-w-5xl flex justify-between items-center">
        <div class="p-4 h-16"><img src="/notiflow.png" class="h-full" /></div>
        <a class="p-4" href="https://github.com/distbe/notiflow-landing" target="_blank">
          <div class="w-6 h-6">
            <svg class="w-full h-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
    <div class="container mx-auto max-w-5xl p-4 ">
      <div class="flex flex-col-reverse font-mono gap-y-3">
        <template v-for="(log, logIndex) in logs" :key="logIndex">
          <div>
            <div class="text-sm text-gray-400">{{ format(log.created.seconds * 1000, 'yyyy-MM-dd HH:mm:ss') }}</div>
            <div class="text-sm whitespace-pre-line break-all">{{ JSON.stringify(log.body, null, '  ').replace(/ /g, '&nbsp;') }}</div>
          </div>
        </template>
      </div>
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
