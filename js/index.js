/* 皮肤 */
$(function () {  
        var bgig = localStorage.getItem("bgig");  
        if (bgig == null) {  
            $("body").css({ "backgroundColor": "#F9F9F9" });  
        }  
        else {  
            $("body").css({ "backgroundImage": "url(" + bgig + ")", "background-repeat":"no-repeat","background-size":"100%", "background-attachment":"fixed" });  
            $(".web-content-small").css({ "background-color": "rgba(0, 0, 0, 0.6)" });  
            $(".web-content-small .web-name").css({ "color": "#FFF" }); 
        }  
      
        $("#b-change a").click(function (event) {
            event.stopPropagation();
            $(".skin-layer").slideDown();
        });
    
        $("#skin-up").click(function () {
            $(".skin-layer").slideUp();
        });
    
        /*$(document).click(function () {
            $(".skin-layer").slideUp("slow");
        });*/
    
        $(document).bind("click", function (e) {
            var target = $(e.target);
            if (target.closest(".skin-layer").length == 0) {
                $(".skin-layer").hide();
            }
        })
      
        $(".skin-img img").click(function () {  
            var src = $(this).attr("src");  
            $("body").css({ "backgroundImage": "url(" + src + ")","background-repeat":"no-repeat","background-size":"100%", "background-attachment":"fixed" });  
            $(".web-content-small").css({ "backgroundColor": "rgba(0, 0, 0, 0.6)" }); 
            $(".web-content-small .web-name").css({ "color": "#FFF" }); 
            localStorage.setItem("bgig", src);  
        });  
      
        $("#skin-clear").click(function () {
            $("body").css({ "background": "#F9F9F9" });
            $('.web-content-small').css('backgroundColor', '');
            $(".web-content-small .web-name").css({ "color": "#525558" }); 
            localStorage.clear()
        });
      
    });  

      /* 锚点滚动 */
        $('.nav-sidebar li').on('click', function () {
            var id = $(this).find('a').attr("href"),
                posi,
                ele,
                padding = 70;
            ele = $(id);
            posi = ($(ele).offset() || 0).top - padding;
            $('html, body').animate({
                scrollTop: posi
            }, 'slow');
            $('.nav-sidebar li').removeClass('active');
            $(this).addClass('active');
            return false;
        });