
   
    $("#glcanvas").mouseover(()=>{
      $(".live2d-msg").stop().fadeIn(500);
    })
    $("#glcanvas").mouseout(()=>{
      $(".live2d-msg").stop().fadeOut(500);
    })
    $(".live2d-msg")
    $(function () {
      //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
      $(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 100) {
            $(".fixed-back").fadeIn(500);
          } else {
            $(".fixed-back").fadeOut(500);
          }
          if ($(window).height() + $(window).scrollTop() >= $(document).height() - 100) {
            $("#glcanvas").fadeIn(500);
          }

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
    });
