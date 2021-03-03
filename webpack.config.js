const path = require("path");

module.exports = {
    mode:"development",
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'dgc-utils.js',
        //向外暴露的对象名称
        library:'aUtils',
        //打包生成库可以通过esm/commonjs/requirejs的语法引入
        libraryTarget:"umd"
    }
}