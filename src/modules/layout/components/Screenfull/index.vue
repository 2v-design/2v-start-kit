<template>
  <div class="screen-full" @click="toggle">
    <i
      :title="isFullscreen ? '全屏' : '取消全屏'"
      :class="isFullscreen ? 'iconfont el-icon-bangzhu' : 'iconfont el-icon-full-screen'"
    ></i>
  </div>
</template>

<script>
  import { useFullscreen } from '@vueuse/core'
  export default {
    name: 'Screenfull',
    setup() {
      const { isFullscreen, toggle } = useFullscreen()

      return {
        isFullscreen,
        toggle
      }
    }
  }
</script>

<style lang="scss" scoped>
  .screen-full {
    width: 40px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
      cursor: pointer;
      background: #f0f0f0;
    }
  }
</style>
