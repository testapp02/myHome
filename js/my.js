﻿$(function(){
	let time;
	$(".character").each(function(index,val){
        $(this).css("animation",`xialuo1 1s ${index*0.2}s ease forwards`);
    });
    $(".works li").each(function(index,val){
    	$(val).transition({rotateY:360/8*index});
    });
    let oldX=0,oldY=0,moveX=0,moveY=0;
    $(".works").mousedown(function(e){
    	oldX=e.pageX;
    	oldY=e.pageY;
    	$(document).mousemove(function(e){
    		moveX+=(e.pageX-oldX)/50;
    		moveY+=(e.pageY-oldY)/30;
    		$(".works ul").css("transform",`rotateX(${-moveY}deg) rotateY(${moveX}deg)`);
    		oldX=e.pageX;
    		oldY=e.pageY;
    	});
    	$(document).mouseup(function(){
    		$(document).off('mousemove');
    	});
    });
	$("#main").fullpage({
		verticalCentered: false,
        anchors: ["p1", "p2", "p3", "p4", "p5"],
        scrollingSpeed: 2000,
        navigation: true,
        navigationPosition: "right",
        continuousVertical: true,
        fixedElements:"#menu",
        menu:"#menu",
        loopBottom:true,
        navigationTooltips:["首页","资料","技能","作品","联系我"],
        afterLoad:function(anchor,index){
        	if(index===1){
        		$(".character").each(function(index,val){
        			$(this).css("animation",`xialuo1 0.8s ${index*0.1}s linear forwards`);
        		});
        	}
            if(index===2){
            	$("#two .bj").fadeIn(1000,function(){
            		dazi({
            			text:"个人简介",
            			speed:500,
            			dom:$(".myInfo-title"),
            			success:function(){
            				dazi({
            					text:"本人性格开朗，善于微笑，长于交际，会简单日语及芭蕾舞.我相信，这一切将成为我工作最大的财富.我在很久就注意到贵公司，贵公司无疑是**行业中的姣姣者。同时我又了解到，这又是一支年轻而又富有活力的队伍.本人非常渴望能够在为其中的一员。如果有幸获聘，本人将以为公司创造最大利益为自己最大的利益，不讲价钱.真诚做好每一件事，和同事们团结奋斗.勤奋工作，加强学习，不断进步!",
            					speed:100,
            					dom:$(".myInfo p")
            				});
            			}
            		});
            	});
            }
            if(index===3){
            	$(".bj2").fadeIn(1000,function(){
            		let n=0;
            		$(this).find(".box").css("animation","boxani1 1s ease-in forwards");
            		$(".zsImg").css("animation","ziani 1.5s 1.5s linear infinite");
            		$(".sm-img").css("animation","smani 1s 1.5s ease-out forwards");
            		setTimeout(function(){
            			a();
            		},2500);
            		function a(){
            			n++;
            			if(n>10){
            				return;
            			}
            			$(".skill-"+n).fadeIn(500,function(){
            				a();
            			});
            		}
            		
            	})
            }
            if(index==4){
            	$("#four .bj").fadeIn(2000);
            }
            if(index==5){
            	$("#five .bj").show(0,function(){
            		$(".bj5").animate({top:"0"},500);
            	});
            }
        },
        onLeave:function(index){
        	$("#meu li").each(function(index,val){
    			$(this).css("transition","all 0.5s ease-out").css("transform","translateX(0px)");
    		});
    		$(this).html("Open Nav");
    		falg=!falg;
    		$(this).html("Open Nav");
        	if(index===1){
        		$(".character").each(function(index,val){
        			$(this).css("animation",`xialuo2 0.8s ${index*0.1}s linear forwards`);
        		});
        	}
            if(index===2){
            	$("#two .bj").fadeOut(1000,function(){
					clearInterval(time);
            		$(".myInfo-title").html("");
            		$(".myInfo p").empty();
            	});
            }
            if(index===3){
            	$("#three").find(".box").css("animation","boxani2 1s ease-in forwards");
            	$(".bj2").fadeOut(2000,function(){
            		$("#three").find(".box").css("animation",'');
            		$(".zs").css("animation","");
            		$(".sm-img").css("animation","");
            		$(".skills span").each(function(index,val){
            			$(val).stop().hide();
            		});
            	});
            }
            if(index==4){
            	$("#four .bj").fadeOut(2000);
            }
            if(index==5){
            	$(".bj5").animate({top:"100%"},2000);
            }
        }
		        
	});
	let falg=true;
    $(".nav-btn").click(function(){
    	if(falg==true){
    		$("#meu li").each(function(index,val){
    			$(this).css("transition","all 0.5s "+index*0.1+"s ease-out").css("transform","translateX(100px)");
    		});
    		$(this).html("Close Nav");
    	}else{
    		$("#meu li").each(function(index,val){
    			$(this).css("transition","all 0.5s "+index*0.1+"s ease-out").css("transform","translateX(0px)");
    		});
    		$(this).html("Open Nav");
    	}
    	falg=!falg;
    });
	function z(){
        $(".works ul").css("transform",`rotateY(${moveX}deg) rotateX(${-moveY}deg)`);
    }
	function dazi(obj){
		let textArr=obj.text.split("");
		let dom=obj.dom;
		let success=obj.success||function(){};
		let speed=obj.speed;
		let n=0;
		let length=textArr.length;
		time=setInterval(function(){
			if(n>=length){
				clearInterval(time);
				$("#dazi")[0].pause();
				success();
				return;
			}
			$("#dazi")[0].play();
			let i=$("<i></i>").appendTo(dom);
			i.html(textArr[n]);
			n++;			
		},speed);
	}
	let flag1=false;
	$(".music-btn").click(function(){
		if(flag1==true){
			$("#music")[0].play();
			$(this).html("Close Music");
		}
		else{
			$("#music")[0].pause();
			$(this).html("Open Music");
		}
		flag1=!flag1;
	});
		$("#music")[0].play();
});