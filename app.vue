<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>




<script setup lang="ts">
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
})

</script>