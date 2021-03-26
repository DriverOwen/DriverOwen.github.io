var timer=null,timer2=null,Fcounter=true, SwitchPage=false;
   
    $("#glcanvas").mouseover(function(){
      $(".live2d-msg").stop().fadeIn(500);
    })
    $("#glcanvas").mouseout(function(){
      $(".live2d-msg").stop().fadeOut(500);
    })
   $("#live2dButton").click(function(){
     if($("#live2dButton")[0].checked){
       if(Fcounter){
        $(".spinner").fadeIn();
        $(".live2d-box").css({
          "background":"rgba(0,0,0,0.8)"
        });
        timer=setTimeout(function(){
          $(".spinner").fadeOut();
          timer2=setTimeout(function(){
            $("#glcanvas").fadeIn(1000);
          },1000);
          $(".live2d-box").css({
            "background":"none"
          });
        },6000);
        Fcounter=false;
       }else{
        $(".live2d-box").css({
          "background":"rgba(0,0,0,0)"
        });
        $(".spinner").fadeOut();
        $("#glcanvas").fadeIn(1000);
       }
     }else{
      clearTimeout(timer);
      clearTimeout(timer2);
      console.log("off");
      $(".spinner").fadeOut();
      $("#glcanvas").fadeOut(500);
     }
   })

   $("#live2dButton").mouseover(function(){
    $('#live2dButton').tooltip('show');
    
  })
  $("#live2dButton").mouseout(function(){
    $('#live2dButton').tooltip('hide');
   
  })

    $(function () {
      //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
      $(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 100) {
            $(".fixed-back").fadeIn(500);
          } else {
            $(".fixed-back").fadeOut(500);
          }
          // if ($(window).height() + $(window).scrollTop() >= $(document).height() - 100) {
          //   $("#glcanvas").fadeIn(500);
          // }

        });
        //当点击跳转链接后，回到页面顶部位置
        $(".fixed-back").click(function () {
          if ($('html').scrollTop()) {
            $('html').animate({
              scrollTop: 0
            }, 500); //动画效果
            return false;
          }
          $('body').animate({
            scrollTop: 0
          }, 500);
          return false;
        });
      });
      $(".fixed-switch").click(function(){
        if(SwitchPage == false){
          
          $(".fixed-bg-cover").css({
            "opacity": "0"
          })
          $(".x-nav").css({
          "transform": "translateY(-50px)"
          }) 
          $(".cover-container").css({
            "opacity": "0"
          })
          $(".x-main-content").css({
            "opacity":"0",
            "transform": "translateY(100px)"
          })
          $(".x-footer").css({
            "opacity": "0"
          })
          $(".fixed-home").css({
            "opacity": "0"
          })
          $(".fixed-back").css({
            "opacity": "0"
          })
          SwitchPage =!SwitchPage
        }else {

          $(".fixed-bg-cover").css({
            "opacity": "0.79"
          })
           $(".x-nav").css({
        "transform": "translateY(0px)"
          }) 
          $(".cover-container").css({
            "opacity": "1"
          })
          $(".x-main-content").css({
            "opacity":"1",
            "transform": "translateY(0px)"
          })
          $(".x-footer").css({
            "opacity": "1"
          })
          $(".fixed-home").css({
            "opacity": "1"
          })
          $(".fixed-back").css({
            "opacity": "1"
          })
          SwitchPage =! SwitchPage
        }
      })
      
    });
    
    let aa = document.querySelector(".xowen-cover");
    aa.onmousemove = (e)=> {
      $(".xowen-cover").css({
        "transform":`matrix(1.05, 0, 0, 1.05, ${e.clientX/70}, ${e.clientY/50})`,
      })
    }
    aa.onmouseout = (e)=> {
        $(".xowen-cover").css({
          "transform":`matrix(1, 0, 0, 1, 0,0)`,
        })
    }
  

    document.body.onmousemove = (e)=> {
      if(SwitchPage == true){
        $(".fixed-bg").css({
          "transform":`matrix(1.05, 0, 0, 1.05, ${e.clientX/70}, ${e.clientY/70})`,
        })
      }
    }
    
    document.body.onmouseout = (e)=> {
      if(SwitchPage == true){
        $(".fixed-bg").css({
          "transform":`matrix(1, 0, 0, 1, 0,0)`,
        })
      }
    }

  