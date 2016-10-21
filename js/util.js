;(function(w){
	w.util = {
		getValues: function(obj){
			if(!Object.keys(obj).length){
				return null;
			}

			var keys = Object.keys(obj);
			var ret = [];
			keys.forEach(e=>{
				ret.concat(e);
			})

			return ret;
		}
	}

})(this);