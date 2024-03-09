const path = require("path");
const ZipPlugin = require("./src/zipPlugin ");

module.exports = {
    mode:"development",
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'dgc-utils.js',
        //向外暴露的对象名称
        library:'dUtils',
        //打包生成库可以通过esm/commonjs/requirejs的语法引入
        libraryTarget:"umd"
    },
    plugins:[
        new ZipPlugin({
            filename: 'dgc-utils.zip'
        })
    ]
}