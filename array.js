arr = [];
arr.prototype = {
	map: function() {
		this.elements = new array();
	}
	// add : function (arg1, arg2) {
 //        if (arguments.length == 1) {
           
 //            var len = this.array.length;
 //            this.array[len] = arg1;
 //        } else {
            
 //            var len1 = this.array.length;
 //            var a1 = this.array.slice(0, arg1);
 //            var a2 = this.array.slice(arg1, len);
 //            var len2 = a1.length;
 //            a1[len2] = arg2;
 //            this.array = a1.concat(a2);
 //        }
 //    },
 //    indexOf : function (o) {
 //        var len = this.array.length;
 //        for (var i = 0; i < len; i++) {
 //            if (this.array[i] == o) {
 //                return i;
 //            }
 //        }
 //        return -1;
 //    },
 //    lastIndexOf : function (o) {
 //        var len = this.array.length;
 //        for (var i = len; i >= 0; i--) {
 //            if (this.array[i] == o) {
 //                return i;
 //            }
 //        }
 //        return -1;
 //    },
 //    remove : function (o) {
 //        var i = this.indexOf(o);
 //        if (i == -1) {
 //            return this;
 //        }
 //        return this.removeAt(i);
 //    },
 //    get : function (i) {
 //        var size = this.size();
 //        if (i >= 0 && i < size) {
 //            return this.array[i];
 //        } else {
 //            return null;
 //        }
 //    },
 //    set : function (i, o) {
 //        var size = this.size();
 //        if (i >= 0 && i < size) {
 //            this.array[i] = o;
 //        }
 //    }
}

module.exports = arr;