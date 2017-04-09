
function  newForEach (){
	var nativeArray = Array.prototype.forEach;
	var hasOwnp = Array.prototype.hasOwnProperty;
	var nativeArray = Array.prototype.forEach;
	Array.prototype.forEach = nativeArray||function(callback,ct){
		if(typeof callback!=='function'){
			return ;
		}else{
			for(var i = 0;i<this.length;i++){
				if(hasOwnp.call(this,i)){
					callback.call(this[i],i,this,ct);
					
				}
			}
		}
		
	}
}
function newMap(){
	var arrPro = Array.prototype,
    hasOwn = arrPro.hasOwnProperty,
    nativeMap = arrPro.map;
    
	Array.prototype.map = nativeMap || function (callback, ct) {
  		if (typeof callback != 'function') 
  			return;
  		var returnArr = [];
		for(var i = 0,i < this.length; i++) {
		    returnArr.push(callback.call(this[i], i, this, ct)); // 这就是为什么回调函数没有返回值的情况下会得到一堆的undefined值，他将回调函数的返回值push到了一个数组里面，当你没有显示的返回值的时候，自然push进去的就是undefined了     
		}
  		return  returnArr;
	}    
}
function newFilter(){
	var ObjPro = Array.prototype,
    hasOwn = Array.hasOwnProperty,
    nativeFilter = Array.filter;
    
	Array.prototype.filter = nativeFilter || function (callback, ct) {
  		if (typeof callback != 'function')
  			return;
  		var returnArr = [];
		for(var i = 0,  i < this.length; i++) {
		    if (callback.call(this[i], i, this,ct)) {
		      returnArr.push(this[i]);
		    }
		}    
  		return returnArr;
	}

}
function newSome(){
	var ObjPro = Array.prototype,
    hasOwn = Array.hasOwnProperty,
    nativeSome = Array.some;
    //
    Array.prototype.some = nativeSome || function (callback, ct) {
  		if (typeof callback != 'function') 
  			return;
  		var resultValue = false;
  		for(var i = 0, i < this.length; i++) {
		    if (resultValue) {
		      break;
		    }
	    	resultValue = !!callBack.call(this[i], i, this,ct); 
  		}
  	return  resultValue;
	} 

}
function newEvery(){
	var ObjPro = Array.prototype,
    	hasOwn = Array.hasOwnProperty,
    	nativeEvery = Array.every;
    Array.prototype.every = nativeEvery || function (callBack, ctx) {
  		if (typeof callBack != 'function') return;

  		var resultValue = true;
		for (var i = 0, len = this.length; i < len; i++) {
		    if (!resultValue) {
		      break;    
		    }
		    resultValue = !!callBack.call(ctx, this[i], i, this);
		}    
  		return resultValue;      
	}   
}
function newIndexOf(){
	var ObjPro = Array.prototype,
    	hasOwn = Array.hasOwnProperty,
    	nativeEvery = Array.indexOf;
    Array.prototype.indexOf = nativeIndexOf || function (searchElement, fromIndex) {
	  	var returnIndex = -1,
	      	fromIndex = fromIndex * 1 || 0;
	  	for (var i = fromIndex,i < this.length; i++) {
		    if (searchElement === this[i]) {
		       returnIndex = i;
		       break;
		    }
	  	}             
  		return returnIndex;        
	}
}
function  newLastIndexOf(){
	var ObjPro = Array.prototype,
    	hasOwn = Array.hasOwnProperty,
    	nativeEvery = Array.lastIndexOf;
    Array.prototype.lastIndexOf = nativeLastIndexOf || function (searchElement, fromIndex) {
		var len = this.length,
		    returnIndex = -1,
		    fromIndex = fromIndex * 1 || len - 1;
		      
		for (var i = fromIndex; i > -1; i -= 1) {
		    if (this[i] === searchElement){
		      returnIndex = i;
		      break;
		    }
		}
		return returnIndex;
	}
}
function newReduce(){
	var ObjPro = Array.prototype,
    	hasOwn = Array.hasOwnProperty,
    	nativeEvery = Array.reduce;
    Array.prototype.reduce = nativeReduce || function (callBack, initialVal) {
		if (typeof callBack != 'function') return;
		  
		var init = initialVal,
	    i = 0;
	  
	    if (init === void (0)) {
	        init = this[0];
	        i = 1;
	    }
		for (i, len = this.length; i < len; i++) {
		    if (hasOwn.call(this, i)) {
		      init = callBack(init, this[i], i, this);
		    }  
		}
		  return init;    
	}   
}
function newReduceRight(){
	var ObjPro = Array.prototype,
    	hasOwn = Array.hasOwnProperty,
    	nativeEvery = Array.reduceRight;
    Array.prototype.reduceRight = nativeReduceRight || function (callBack, initialVal) {
		if (typeof callBack != 'function') return;
	  
	 	var init = initialVal,
	      	len = this.length,
	      	i = len - 1;
	      
	  	if (init === void(0)) {
	    	init = this[len - 1];
	    	i -= 1;
	  	}
	  	for (i; i > -1; i -=1) {
	    	if (hasOwn.call(this, i)) {
	      	init = callBack(init, this[i], i, this);
	    	}
	  	}    
	 	return init;
	}     

}
// https://github.com/es-shims/es5-shim