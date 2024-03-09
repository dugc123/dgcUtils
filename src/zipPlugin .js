/*
 * @Autor: 杜庚辰
 * @Desc: 生成zip文件的插件
 * @Date: 2024-03-09 21:05:23
 */
const JSzip = require('jszip');
const { RawSource } = require('webpack-sources');

class ZipPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(complier) {
        let context = this;
        complier.hooks.emit.tapAsync('zipPlugin', (compilation, callback) => {
            const zip = new JSzip();
            // 生成的所有的静态文件，我都给你压缩一下
            Object.keys(compilation.assets).forEach((filename) => {
                const source = compilation.assets[filename].source();
                zip.file(filename, source);
            });

            zip.generateAsync({ type: 'nodebuffer' }).then(res => {
                compilation.assets[context.options.filename] = new RawSource(res);
                callback()
            })
        })
    }
}

module.exports = ZipPlugin;