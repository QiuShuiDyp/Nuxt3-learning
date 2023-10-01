export default defineNuxtPlugin((nuxtApp) => {
  // 通过nuxtApp获取vueApp实例
  nuxtApp.vueApp.config.errorHandler = (err, vm, info) => {
    console.log('errorHandler', err, vm, info)
  }
  nuxtApp.hook('vue:error', () => {
    console.log('vue:error')
  })
  nuxtApp.hook('app:error', () => {
    console.log('app:error')
  })
})
