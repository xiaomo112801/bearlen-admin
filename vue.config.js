module.exports = {
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => {
        args[0].title = "bearlen-admin管理后台"
        return args
      })
  },
  devServer: {
    proxy: {
      '/admin': {
        target: "http://api.bearlen.com",
        changeOrigin: true,
        ws: true
      }
    }
  }
}