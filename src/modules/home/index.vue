<template>
  <div class="home">
    <ul class="nav">
      <li
        v-for="(item, index) in navList"
        :key="index"
        :class="[componentName === item && 'active']"
        @click="componentName = item"
        >{{ item }}</li
      >
    </ul>
    <div class="content page-component__scroll">
      <HelloWorld v-if="componentName === 'HelloWorld'" />
      <TestComponent v-if="componentName === 'TestComponent'" />
      <Live2dBoard v-if="componentName === 'Live2dBoard'" />
      <README v-if="componentName === 'README'" />
    </div>

    <el-backtop target=".page-component__scroll "></el-backtop>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  import TestComponent from '@/components/TestComponent/README.md'
  import Live2dBoard from '@/components/Live2dBoard/README.md'
  import README from '@/components/Readme/README.md'
  import { ref } from 'vue'
  export default {
    components: {
      HelloWorld,
      TestComponent,
      Live2dBoard,
      README
    },
    setup() {
      const componentName = ref('README')
      const navList = ['HelloWorld', 'TestComponent', 'Live2dBoard', 'README']
      return {
        componentName,
        navList
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    height: 100%;
    width: 100%;

    .nav {
      margin: 0;
      padding: 0;
      width: 200px;
      height: 100%;

      li {
        height: 40px;
        cursor: pointer;
        line-height: 40px;
        padding-left: 20px;

        &:hover {
          color: #409eff;
        }
      }

      .active {
        color: #409eff;
      }
    }

    .content {
      display: flex;
      justify-content: center;
      flex: 1;
      min-height: 100%;
      overflow: auto;
    }
  }
</style>
