<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button link @click="handleChangeCount">改变单个state</el-button>
    <el-button link @click="handleChangeState">改变多个state</el-button>
    <el-button link @click="handleResetState">重置state</el-button>
    <p>state.count is: {{ store.count }}</p>
    <p>state.message is: {{ store.message }}</p>
    --------
    <p>store计算属性 doubleCount is: {{ store.doubleCount }}</p>
  </div>
</template>

<script>
  import { useStore } from '@/stores/counter'

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    setup() {
      const store = useStore()
      //改变单个state
      const handleChangeCount = () => {
        store.count++
      }

      //改变多个state
      const handleChangeState = () => {
        store.$patch({
          count: 200,
          message: '哈哈哈哈哈哈哈'
        })
      }
      //改变多个state
      const handleResetState = () => {
        store.$reset()
      }

      return {
        store,
        handleChangeCount,
        handleChangeState,
        handleResetState
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hello {
    text-align: center;
  }

  a {
    color: #42b983;
  }
</style>
