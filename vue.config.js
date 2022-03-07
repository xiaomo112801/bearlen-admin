const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => {
        args[0].title = "bearlen管理后台"
        return args
      })
  },

})