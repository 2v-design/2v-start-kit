<template>
  <div class="layout">
    <TopNav />
    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import TopNav from '../components/TopNav/index.vue'
  export default {
    components: {
      TopNav
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    height: 100%;
    width: 100%;

    .layout-content {
      height: calc(100% - 48px);
    }
  }
</style>
