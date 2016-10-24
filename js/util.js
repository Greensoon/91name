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
		},

		getConfigs: function(key){
			return {
				gender : {
					male: 1,
					female: 0,
				}
			}[key]
		},

		arrayContain: function(arr,ele){

			for(var i=0;i<arr.length;i++){
				if(arr[i]==ele){
					return true
				}
			}

			return false;
		}
	}

})(this);