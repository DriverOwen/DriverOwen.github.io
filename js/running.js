var timer=null,timer2=null,Fcounter=!0;$("#glcanvas").mouseover(function(){$(".live2d-msg").stop().fadeIn(500)}),$("#glcanvas").mouseout(function(){$(".live2d-msg").stop().fadeOut(500)}),$("#live2dButton").click(function(){$("#live2dButton")[0].checked?Fcounter?($(".spinner").fadeIn(),$(".live2d-box").css({background:"rgba(0,0,0,0.8)"}),timer=setTimeout(function(){$(".spinner").fadeOut(),timer2=setTimeout(function(){$("#glcanvas").fadeIn(1e3)},1e3),$(".live2d-box").css({background:"none"})},6e3),Fcounter=!1):($(".live2d-box").css({background:"rgba(0,0,0,0)"}),$(".spinner").fadeOut(),$("#glcanvas").fadeIn(1e3)):(clearTimeout(timer),clearTimeout(timer2),console.log("off"),$(".spinner").fadeOut(),$("#glcanvas").fadeOut(500))}),$("#live2dButton").mouseover(function(){$("#live2dButton").tooltip("show")}),$("#live2dButton").mouseout(function(){$("#live2dButton").tooltip("hide")}),$(function(){$(function(){$(window).scroll(function(){100<$(window).scrollTop()?$(".fixed-back").fadeIn(500):$(".fixed-back").fadeOut(500)}),$(".fixed-back").click(function(){return $("html").scrollTop()?$("html").animate({scrollTop:0},500):$("body").animate({scrollTop:0},500),!1})})});