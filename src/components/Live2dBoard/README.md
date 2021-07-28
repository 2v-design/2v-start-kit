# Live2dBoard

## 基础使用

```vue demo

<template>
  <div class="live-board">
    <el-button type="text" class="title" @click.stop="$refs.live2d.showModel()">打开</el-button>
    <el-button type="text" class="title" @click.stop="$refs.live2d.hideModel()">关闭</el-button>
    <Live2dBoard ref="live2d"/>
  </div>
</template>
<script >
import { reactive } from 'vue'
import Live2dBoard from "./index.vue"
export default {
  components: {
    Live2dBoard
  },
  setup() {
    const live2d = reactive({})
    
    return {
      live2d,
    }
  }
}
</script>
```

## 组件说明

| 名称          | 类型          | 说明     |
| ------------- | ------------- | -------- |
| changeVisible | callback func | 显示隐藏 |
