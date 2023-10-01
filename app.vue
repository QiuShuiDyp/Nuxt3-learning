<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (s) => (s ? `${s} - Nuxt.js` : 'Nuxt-Learning'),
})
</script>
