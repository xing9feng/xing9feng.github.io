    $(function () {  
        var bgig = localStorage.getItem("bgig");  
        if (bgig == null) {  
            $("body").css({ "background-color": "#F9F9F9" });  
        }  
        else {  
            $("body").css({ "background-image": "url(" + bgig + ")", "background-repeat":"no-repeat","background-size":"100%", "background-attachment":"fixed" });  
        }  
      
        

        $("#b-change a").click(function () {
            $(".skin_layer").slideDown();
        });

        $("#skin-up a").click(function () {
            $(".skin_layer").slideUp();
        });

        $("#skin-clear a").click(function () {
            $("body");
            localStorage.clear()
        });
      
        $(".skin-img img").click(function () {  
            var src = $(this).attr("src");  
            $("body").css({ "background-image": "url(" + src + ")","background-repeat":"no-repeat","background-size":"100%", "background-attachment":"fixed" });  
            localStorage.setItem("bgig", src);  
        });  
      
    });  

