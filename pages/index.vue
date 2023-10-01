<template>
  <div>Index Page</div>
  <!-- 错误处理 -->
  <div v-if="error">request error:{{ error.message }}</div>
  <!-- 加载处理 -->
  <div v-if="pending">加载中</div>
  <ul v-else>
    <li v-for="post in posts" :key="post.id">
      <nuxt-link :to="`/detail/${post.id}`">{{ post.title }}</nuxt-link>
    </li>
    <!-- 分页 -->
    <button @click="prev">上一页</button>
    <button @click="next">下一页</button>
  </ul>
</template>

<script setup lang="ts">
const page = ref(1)
function prev() {
  page.value--
  refresh()
}
function next() {
  page.value++
  refresh()
}
const {
  data: posts,
  pending,
  error,
  refresh,
} = await useFetch(() => `/api/posts?page=${page.value}&size=${1}`)
// 配置标题
useHead({
  title: '文章列表',
})
</script>

<style scoped></style>
