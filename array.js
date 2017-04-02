var arr = {
	add : function (arg1, arg2) {
        if (arguments.length == 1) {
            // 如果参数为1则直接在链表末尾插入对象
            var len = this.array.length;
            this.array[len] = arg1;
        } else {
            // 插入对象
            var len1 = this.array.length;
            var a1 = this.array.slice(0, arg1);
            var a2 = this.array.slice(arg1, len);
            var len2 = a1.length;
            a1[len2] = arg2;
            this.array = a1.concat(a2);
        }
    },
}
var CArrayList = Class.Create(CCloneable,{
    /* 内置数组 */
    array : [],

    /*
     * 构造函数
     */
    initialize : function () {
        this.array = [];
    },

    /*
     * 输出数组
     * @return Array
     */
    toArray : function () {
        return this.array;
    },

    /*
     * 从前面获得对象所在数组位置
     * @param object o    要寻找的对象
     * @return int
     */
    indexOf : function (o) {
        var len = this.array.length;
        for (var i = 0; i < len; i++) {
            if (this.array[i] == o) {
                return i;
            }
        }
        return -1;
    },

    /*
     * 从后面获得对象所在数组位置
     * @param object o 要寻找的对象
     * @rerturn int
     */
    lastIndexOf : function (o) {
        var len = this.array.length;
        for (var i = len; i >= 0; i--) {
            if (this.array[i] == o) {
                return i;
            }
        }
        return -1;
    },

    /*
     * 添加元素
     * @param object arg1 被插入的对象
     * @param object arg2    插入的对象
     */
    add : function (arg1, arg2) {
        if (arguments.length == 1) {
            // 如果参数为1则直接在链表末尾插入对象
            var len = this.array.length;
            this.array[len] = arg1;
        } else {
            // 插入对象
            var len1 = this.array.length;
            var a1 = this.array.slice(0, arg1);
            var a2 = this.array.slice(arg1, len);
            var len2 = a1.length;
            a1[len2] = arg2;
            this.array = a1.concat(a2);
        }
    },

    /*
     * 添加多个元素
     * @param Array a    元素数组
     */
    addAll : function (a) {
        if (a instanceof Array) {
            // 添加的元素是数组
            this.array = this.array.concat(a);
        } else if (typeof(a.toArray) == 'function'
            && ((a = a.toArray()) instanceof Array)) {
            // 添加的元素是链表
            this.array = this.array.concat(a);
        } else {
            throw new CException('参数错误', '添加链表的时候参数出错');
        }
    },

    /*
     * 移除元素
     * @param int i    索引值
     */
    removeAt : function (i) {
        var len = this.array.length;
        if (i < 0 || i >= len) {
            return null;
        }
        var o = this.array[i];
        this.array = this.array.slice(0, i).concat(this.array.slice(i + 1, len));
        return o;
    },

    /*
     * 移除元素
     * @param object o    元素
     */
    remove : function (o) {
        var i = this.indexOf(o);
        if (i == -1) {
            return this;
        }
        return this.removeAt(i);
    },

    /*
     * 验证元素是否存在
     * @return boolean
     */
    contains : function (o) {
        return this.indexOf(o) != -1;
    },

    /*
     * 清除链表
     */
    clear : function () {
        this.array.length = 0;
    },

    /*
     * 获得链表大小
     * @return int
     */
    size : function () {
        return this.array.length;
    },

    /*
     * 获得元素
     * @param int i        索引值
     * @return object
     */
    get : function (i) {
        var size = this.size();
        if (i >= 0 && i < size) {
            return this.array[i];
        } else {
            return null;
        }
    },

    /*
     * 设置元素
     * @param int i        索引值
     * @param ojbect    元素
     */
    set : function (i, o) {
        var size = this.size();
        if (i >= 0 && i < size) {
            this.array[i] = o;
        }
    },

});
module.exports = arr;