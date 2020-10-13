<template>
  <div id="app" class="container">
      <!-- 头部 -->
    <nav-bar></nav-bar>
    <div class="col-md-2">
        <!-- 侧边栏 -->
      <my-aside></my-aside>
    </div>

    <div class="col-md-10">
      <!-- 内容部分 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/nav-bar.vue'
import MyAside from './components/my-aside.vue'

export default {
  components: {
    NavBar,
    MyAside
  }
}
</script>

<style>

</style>
