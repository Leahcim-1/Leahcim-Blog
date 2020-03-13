const {
    override,
    fixBabelImports,
    addLessLoader,
  } = require('customize-cra');

  module.exports = override(
    
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { "@brand-primary": "#1cae82", "@brand-primary-tap": "#1DA57A", "@hd": "1px"},
    //   strictMath: true,
    //   noIeCompat: true,
    //   localIdentName: '[local]--[hash:base64:5]'
    }),
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
      })
  )