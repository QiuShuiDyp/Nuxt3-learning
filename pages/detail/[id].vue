<template>
  <div>
    <h2>{{ data?.title }}</h2>
    <div v-if="errorText">{{ errorText }}</div>
    <div v-else v-html="data?.content"></div>
    <textarea cols="30" rows="10" v-model="comment"></textarea>
    <button @click="submit">提交</button>
  </div>
</template>

<script setup lang="ts">
import { useUser } from '~/store/user'
import { NuxtError } from '#app'
const route = useRoute()
const router = useRouter()
const comment = ref('')
const store = useUser()
const { isLogin } = storeToRefs(store)

const { id } = route.params
const fetchPost = () => $fetch(`/api/detail/${id}`)
const { data, pending, error } = await useAsyncData('fetchDetail', fetchPost)
const errorText = computed(() => error.value as NuxtError)
watchEffect(() => {
  // 如果error有值
  if (unref(error)) {
    // showError方法会触发error.vue的显示
    showError(errorText.value)
  }
})
function submit() {
  // 未登录
  if (!isLogin.value) {
    router.push(`/login?callback=` + route.path)
  } else {
    comment.value = ''
  }
}
useHead({
  title: () => id as string,
})
</script>

<style scoped></style>
