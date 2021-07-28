<template>
  <Layout v-if="hasLayout">
    <router-view />
  </Layout>
  <router-view v-else />
</template>

<script>
  import Layout from '@/modules/layout/view/index.vue'
  //versionShow
  import { versionShow } from 'utils/log'
  export default {
    components: {
      Layout
    },
    data() {
      return {
        msg: 'Hello pinia',
        hasLayout: false
      }
    },
    watch: {
      '$route.name': {
        handler(oldValue, newValue) {
          let token = localStorage.getItem('access_token')
          if (token && !newValue) {
            this.$router.push({
              name: 'home'
            })
            this.hasLayout = true
          }

          if (!token) {
            this.$router.push({
              name: 'login'
            })
            this.hasLayout = false
          }
        }
      }
    },
    mounted() {
      versionShow()
    }
  }

  // This starter template is using Vue 3 experimental <script setup> SFCs
  // Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.7);
  }

  #app {
    height: 100%;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
</style>
