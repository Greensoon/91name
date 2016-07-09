;(function($,fp,tg,sg){
	
	String.prototype.sameElements = function(str){
		var _t=this;
	    if(new RegExp(str).test(_t)){
	    	return str;
	    }else{
	    	var reg=new RegExp(str.substr(1));
	    	if(reg.test(_t)){
	    		return str.substr(1);
	    	}
	    }
	}
	
	var t='';
	function getArticleTitle(id,t){//i*******xuanziId，t*********type
		var title='';
		if(t=='T'){
			for(var i=0;i<tg.length;i++){
				if(tg[i].id==id){
					title=tg[i].title;
				}
			}
		}
		return title;
	}
	
	function getYuchu(j,n){
		var ss=j.sameElements(n);
		console.log('ss:'+ss);
		return j.replace(new RegExp(ss),'<span class="keywords-css">'+ss+'</span>');
	}
	for(var i=0;i<fp.length;i++){
		var title=getArticleTitle(fp[i].guanlian.xuanziId,fp[i].guanlian.type);
		var yuchu=getYuchu(fp[i].guanlian.juzi,fp[i].name);
		if(i%2==0){
			t +='<li class="clearfix">';
			t +='<div class="hot_pos_l">';
			t +='<div class="mb10">';
			t +='<a href="persondetail.html?i='+fp[i].guanlian.xuanziId+'&t='+fp[i].guanlian.type+'" target="_blank">'+fp[i].name+'</a> &nbsp;';
			t +='<span class="c9">['+fp[i].city+']</span>';
			t +='</div>';
			t +='<span><em class="c7">节选自： </em>'+title+'</span><br />';
			t +='<span><em class="c7">语出：</em>'+yuchu+'</span>';
			t +='</div>';
			t +='<div class="hot_pos_r" style="text-align:right">';
			t +='<img src="style/images/'+fp[i].iconPath+'" style="width:80px;height:80px;border-radius:100%">';
			t +='</div>';
			t +='</li>';
		}else{
			t +='<li class="odd clearfix">';
			t +='<div class="hot_pos_l">';
			t +='<div class="mb10">';
			t +='<a href="persondetail.html?i='+fp[i].guanlian.xuanziId+'&t='+fp[i].guanlian.type+'" target="_blank">'+fp[i].name+'</a> &nbsp;';
			t +='<span class="c9">['+fp[i].city+']</span>';
			t +='</div>';
			t +='<span><em class="c7">节选自： </em>'+title+'</span><br />';
			t +='<span><em class="c7">语出：</em>'+yuchu+'</span>';
			t +='</div>';
			t +='<div class="hot_pos_r" style="text-align:right">';
			t +='<img src="style/images/'+fp[i].iconPath+'" style="width:80px;height:80px;border-radius:100%">';
			t +='</div>';
			t +='</li>';
		}
	}
	
	$('#fparea').html(t+'<a href="list.html?city=%E5%85%A8%E5%9B%BD" class="btn fr" target="_blank">查看更多</a>');
})(jQuery,FP,tang,song);
