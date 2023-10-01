// 导出一个默认函数，返回对应的响应参数
export default defineEventHandler((event) => {
  return {
    message: 'hello nuxt3',
  }
})
