<template>
  <div>
    等待异步组件出现 👇👇👇👇👇👇
    <div>
      <div>这是代码分割：Async: () => import(/* webpackChunkName: 'app.async' */ './Async.vue')</div>
      <Async />
    </div>
    等待异步组件出现 👆👆👆👆👆👆
  </div>
</template>

<script>

export default {
  data: () => ({ msg: 'dwq' }),
  components: {
    Async: () => import(/* webpackChunkName: 'app.async' */ './Async.vue')
  }
};
</script>

<style>

</style>
