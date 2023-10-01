<template>
  <div class="p-4">
    Counter: {{ counter }}
    <!-- countRef: {{ countRef }} -->
    <div class="mt-2">
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <Counter />
    <Counter />
  </div>
</template>

<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
const countRef = ref(Math.round(Math.random() * 1000)) //服务端会执行一遍，客户端也会执行一遍，前后两者不一致，水合报错
</script>
