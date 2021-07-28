<template>
  <div
    ref="modelWrap"
    class="model-wrap"
    :style="{ width: `${currModel.width}px`, height: `${currModel.height}px` }"
  >
    <div class="message" ref="message" :style="{ bottom: currModel.offset }">
      {{ message }}
    </div>
    <canvas
      class="live2d"
      id="live2d"
      @click="click2dCanvas"
      :width="currModel.width"
      :height="currModel.height"
    ></canvas>
    <div class="hide-button" @click="hideModel">隐藏</div>
    <ul class="change-model-tool">
      <li
        v-for="item in models"
        :class="['change-model', currModel.name === item.name ? 'model-li-avtive' : '']"
        :key="item.name"
        @click="changeModel(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import './style.scss'
  import models from './models'
  import { loadjs } from '@/utils/global'

  export default {
    data() {
      return {
        loadlive2d: null,
        modelVisible: false,
        currModel: {
          name: 'ntw20_2301',
          height: '750',
          width: '500',
          message: '我是 hs_110 点击能触发一个音效',
          offset: '93%'
        },
        message: '模型资源来自 gitee live2d_models_collect',
        hitokoto: '',
        // 定时器
        hitokotoTimer: null,
        messageTimer: null,

        models: models,
        staticPath: 'https://api.nextprops.com/public/static'
      }
    },

    watch: {
      modelVisible: {
        immediate: true,
        handler(val) {
          this.$emit('changeVisible', val)
        }
      }
    },

    mounted() {
      this.initLoadLive2d()
      this.timerManager()
    },

    methods: {
      // 初始化 live2d
      initLoadLive2d() {
        loadjs(`${this.staticPath}/live2d/js/live2d.js`).then(() => {
          this.loadlive2d = window.loadlive2d
          this.getJson()
          // this.showMessage();
          // this.modelVisible = true;
        })
      },

      // 更换 model
      changeModel(model) {
        this.currModel = model
        this.message = model.message
        this.getJson()
      },

      getJson() {
        axios
          .get(
            `${this.staticPath}/live2d/modules/${this.currModel.name}/${this.currModel.name}.model.json`
          )
          .then(() => {
            setTimeout(() => {
              this.loadlive2d(
                'live2d',
                `${this.staticPath}/live2d/modules/${this.currModel.name}/${this.currModel.name}.model.json`
              )
            }, 100)
          })
      },

      // 点击 model
      click2dCanvas() {
        this.showMessage()
      },

      enter2dCanvas() {
        this.showMessage()
      },
      // 计时器管理
      timerManager() {
        this.hitokotoTimer = setInterval(() => {
          this.fetchHitokoto()
        }, 15000)
      },

      // message管理
      messageManager(msg) {
        this.message = msg
      },

      fetchHitokoto() {
        this.modelVisible &&
          axios.get('https://v1.hitokoto.cn/?c=c').then((res) => {
            let msg = `『${res.data.hitokoto}』`
            this.messageManager(msg)
            this.showMessage()
            this.hideMessage()
          })
      },

      showMessage() {
        if (!this.$refs.message) return
        this.$refs.message.style.opacity = 1
      },

      hideMessage() {
        this.$refs.message &&
          setTimeout(() => {
            this.$refs.message.style.opacity = 0
          }, 5000)
      },
      // 隐藏 model
      hideModel() {
        if (!this.$refs.modelWrap) return
        this.modelVisible = false
        this.$refs.modelWrap.style.display = 'none'
      },

      // 显示 model
      showModel() {
        if (!this.$refs.modelWrap) return
        this.modelVisible = true
        this.$refs.modelWrap.style.display = 'block'
      },

      beforeDestroy() {
        this.hitokotoTimer = null
        this.messageTimer = null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .side-nav {
    width: 100px;
    position: fixed;
    top: 150px;
    left: 100px;
    display: flex;
    flex-flow: column;
    font-size: 14px;
  }

  ul {
    padding-left: 0 !important;
    text-align: center;
  }
</style>
