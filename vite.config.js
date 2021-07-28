import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import { GIT_VERSION, VITE_APP_INFO } from './config/global-constants'

import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'
import Pages from 'vite-plugin-pages'

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  // minify: 'esbuild',//构建时的压缩方式
  server: {
    host: '0.0.0.0',
    port: 3000, // 启动端口
    open: true,
    // proxy: {
    //   // 选项写法
    //   '/api': 'http://xxxx'// 代理网址
    // },
    cors: true
  },
  plugins: [
    // 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    // md文件渲染
    vitePluginVuedoc({
      wrapperClass: 'markdown-body'
    }),
    Pages({
      pagesDir: 'src/components',
      extensions: ['md']
      // exclude: ['**/components/*.vue']
    }),
    vue({
      include: [...vueDocFiles] // 2. Must include .md | .vd files
    })
  ],
  build: {
    brotliSize: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000
  },

  resolve: {
    alias: {
      '@': resolve('src'),
      api: resolve('src/api'),
      utils: resolve('src/utils'),
      env: resolve('src/env'),
      components: resolve('src/components')
    }
  },
  // 全局常量
  define: {
    __GIT_VERSION__: GIT_VERSION,
    __VITE_APP_INFO__: VITE_APP_INFO
  }
})
