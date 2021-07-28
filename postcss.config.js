module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 1920, // 设计稿宽度
      unitPrecision: 5, // px转换后的小数保留位数，有时候不能整除
      minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
      selectorBlaskList: ['.ignore-'] // 指定不需要转换的类
    }
  }
}
