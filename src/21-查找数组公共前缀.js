/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
    如果不存在公共前缀，返回空字符串 ""。

    示例 1：

    输入：strs = ["flower","flow","flight"]
    输出："fl"

    示例 2：

    输入：strs = ["dog","racecar","car"]
    输出：""
    解释：输入不存在公共前缀。

    startsWith() 方法用于检测字符串是否以指定的子字符串开始。

    如果是以指定的子字符串开头返回 true，否则 false。

    startsWith() 方法对大小写敏感。
    */
const longestCommonPrefix = function (strs) {
    const str = strs[0];
    let index = 0;
    while (index < str.length) {
        const strCur = str.slice(0, index + 1);
        for (let i = 0; i < strs.length; i++) {
            if (!strs[i] || !strs[i].startsWith(strCur)) {
                return str.slice(0, index);
            }
        }
        index++;
    }
};

console.log('str',longestCommonPrefix(["dog","racecar","car"]));
