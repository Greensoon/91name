(function($,l,lg){
    var stage, textStage, form, input;
    var circles, textPixels, textFormed;
    var offsetX, offsetY, text;
    var colors = ['#B2949D', '#FFF578', '#FF5F8D', '#37A9CC', '#188EB2'];

    function init() {
        initStages();
        // initForm();
        initText();
        initCircles();
        animate();
        addListeners();
    }

    // Init Canvas
    function initStages() {
        offsetX = (window.innerWidth-600)/2;
        offsetY = (window.innerHeight-300)/2;
        textStage = new createjs.Stage("text");

        stage = new createjs.Stage("stage");
        stage.canvas.width = window.innerWidth;
        stage.canvas.height = window.innerHeight;
        stage.canvas.fillStyle = "#f5f3f0";
    }

    // function initForm() {
    //     form = document.getElementById('form');
    //     form.style.top = offsetY+200+'px';
    //     form.style.left = offsetX+100+'px';
        
    //     var ilo=document.getElementById('ilo');
    //     ilo.style.top = offsetY+270+'px';
    //     ilo.style.left = offsetX+100+'px';
        
    //     var ilput=document.getElementById('ilput');
    //     ilput.style.top = offsetY+170+'px';
    //     ilput.style.left = offsetX+300+'px';
        
    //     input = document.getElementById('inputText');
    // }

    function initText() {
        text = new createjs.Text("t", "80px 'Source Sans Pro'", "#eee");
        text.textAlign = 'center';
        text.x = 300;
    }

    function initCircles() {
        circles = [];
        for(var i=0; i<600; i++) {
            var circle = new createjs.Shape();
            var r = 7;
            var x = window.innerWidth*Math.random();
            var y = window.innerHeight*Math.random();
            var color = colors[Math.floor(i%colors.length)];
            var alpha = 0.2 + Math.random()*0.5;
            circle.alpha = alpha;
            circle.radius = r;
            circle.graphics.beginFill(color).drawCircle(0, 0, r);
            circle.x = x;
            circle.y = y;
            circles.push(circle);
            stage.addChild(circle);
            circle.movement = 'float';
            tweenCircle(circle);
        }
    }


    // animating circles
    function animate() {
        stage.update();
        requestAnimationFrame(animate);
    }

    function tweenCircle(c, dir) {
        if(c.tween) c.tween.kill();
        if(dir == 'in') {
            c.tween = TweenLite.to(c, 0.4, {x: c.originX, y: c.originY, ease:Quad.easeInOut, alpha: 1, radius: 5, scaleX: 0.4, scaleY: 0.4, onComplete: function() {
                c.movement = 'jiggle';
                tweenCircle(c);
            }});
        } else if(dir == 'out') {
            c.tween = TweenLite.to(c, 0.8, {x: window.innerWidth*Math.random(), y: window.innerHeight*Math.random(), ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5, scaleX: 1, scaleY: 1, onComplete: function() {
                c.movement = 'float';
                tweenCircle(c);
            }});
        } else {
            if(c.movement == 'float') {
                c.tween = TweenLite.to(c, 5 + Math.random()*3.5, {x: c.x + -100+Math.random()*200, y: c.y + -100+Math.random()*200, ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            } else {
                c.tween = TweenLite.to(c, 0.05, {x: c.originX + Math.random()*3, y: c.originY + Math.random()*3, ease:Quad.easeInOut,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            }
        }
    }

    function formText() {
        for(var i= 0, l=textPixels.length; i<l; i++) {
            circles[i].originX = offsetX + textPixels[i].x;
            circles[i].originY = offsetY + textPixels[i].y;
            tweenCircle(circles[i], 'in');
        }
        textFormed = true;
        if(textPixels.length < circles.length) {
            for(var j = textPixels.length; j<circles.length; j++) {
                circles[j].tween = TweenLite.to(circles[j], 0.4, {alpha: 0.1});
            }
        }
    }

    function explode() {
        for(var i= 0, l=textPixels.length; i<l; i++) {
            tweenCircle(circles[i], 'out');
        }
        if(textPixels.length < circles.length) {
            for(var j = textPixels.length; j<circles.length; j++) {
                circles[j].tween = TweenLite.to(circles[j], 0.4, {alpha: 1});
            }
        }
    }

    // event handlers
    function addListeners() {
        document.getElementById("indexForm").addEventListener('submit', submit);
        document.getElementById("indexSearch").addEventListener("click", submit);
    }



    function submit(e) {
        e.preventDefault();
        input =document.getElementById("inputText");
        // document.getElementById('ilput').style.display='none';
        if(textFormed) {
            explode();
            if(input.value != '') {
                setTimeout(function() {
                    createText(input.value.toUpperCase()+"测试");
                }, 800);
            } else {
                textFormed = false;
            }
        } else {
            createText(input.value.toUpperCase()+"测试");
        }

        
    }

    function createText(t) {
    	
    	// //******sex******\\
    	// var sexVal=$('#sex').val();
    	// var nl=[];
    	// switch(sexVal){
    	// 	case '0':nl=l.concat(lg);break;
    	// 	case '1':nl=l.concat(lao_boynamesA,lao_boynamesB,lao_boynamesC,lao_boynamesD,lao_boynamesF,lao_boynamesG,lao_boynamesH,lao_boynamesJ,lao_boynamesK,lao_boynamesL,lao_boynamesM,lao_boynamesP,lao_boynamesQ,lao_boynamesR,lao_boynamesS,lao_boynamesT,lao_boynamesX,lao_boynamesY,lao_boynamesZ);break;
    	// 	case '2':nl=lg.concat(lao_girlnamesA,lao_girlnamesB,lao_girlnamesC,lao_girlnamesD,lao_girlnamesE,lao_girlnamesG,lao_girlnamesH,lao_girlnamesJ,lao_girlnamesK,lao_girlnamesM,lao_girlnamesN,lao_girlnamesP,lao_girlnamesQ,lao_girlnamesR,lao_girlnamesS,lao_girlnamesT,lao_girlnamesX,lao_girlnamesY,lao_girlnamesZ);break;
    	// }
    	// console.log(nl.length);
    	// console.log(nl.toString());
    	// var arr = [];
    	// //*********姓与名字的首字同字*********\\
    	// for(var v=0;v<nl.length;v++){
    	// 	if(nl[v].indexOf(t)==0){
    	// 		arr.push(nl[v]);
    	// 	}
    	// }
    	// //********如果没有单字的名字,在全局里取随机名字********\\
    	// if(arr.length==0){
    	// 	var ix = Math.floor(Math.random(nl.length-1)*(nl.length));
    	// 	t=t+nl[ix];
    	// }
    	// else{
    	// 	//如果名字是2个字的选择少于20的话，再随机增加20个选项
    	// 	for(var i=0;i<20;i++){
	    // 		var ixx=Math.floor(Math.random(nl.length-1)*(nl.length));
	    // 		arr.push(nl[ixx]);
    	// 	}
    		
	    // 	var ix = Math.floor(Math.random(arr.length-1)*(arr.length));
	    // 	t=arr[ix].indexOf(t)>=0?arr[ix]:t+arr[ix];
    	// }
    	
    	// document.getElementById('ilput').innerText=t;
    	// document.getElementById('ilput').style.display='block';
        var fontSize = 760/(t.length);
        fontSize = Math.floor(fontSize);
        if (fontSize > 160) fontSize = 160;
        text.text = t;
        text.font = "800 "+fontSize+"px 'Source Sans Pro'";
        text.textAlign = 'center';
        text.x = 300;
        text.y = (172-fontSize)/2;
        textStage.addChild(text);
        textStage.update();

        var ctx = document.getElementById('text').getContext('2d');
        var pix = ctx.getImageData(0,0,600,200).data;
        textPixels = [];
        for (var i = pix.length; i >= 0; i -= 4) {
            if (pix[i] != 0) {
                var x = (i / 4) % 600;
                var y = Math.floor(Math.floor(i/600)/4);

                if((x && x%8 == 0) && (y && y%8 == 0)) textPixels.push({x: x, y: y});
            }
        }

        formText();

    }


    window.onload = function() { init() };
    $(window).resize(function(){
        stage.canvas.width = window.innerWidth;
        stage.canvas.height = window.innerHeight;
    });
})(jQuery,NAMES.getNames() || []);