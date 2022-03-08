module.exports = {
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => {
        args[0].title = "一点空间商户后台-手机版"
        return args
      })
  }
}