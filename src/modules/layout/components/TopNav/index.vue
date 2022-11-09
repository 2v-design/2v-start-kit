<template>
  <div class="top-nav">
    <div class="left"></div>
    <div class="right">
      <Screenfull />
      <el-button link @click="logout">退出</el-button>
    </div>
  </div>
</template>

<script>
  import Screenfull from '../Screenfull/index.vue'
  import { logout } from 'utils/user'
  export default {
    components: {
      Screenfull
    },
    setup() {
      return {
        logout
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-nav {
    width: 100%;
    height: 48px;
    background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
    display: flex;
    justify-content: space-between;
    padding: 0 24px;

    .right {
      display: flex;
    }
  }
</style>
