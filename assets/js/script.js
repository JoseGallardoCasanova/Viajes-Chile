$(document).ready(function () {

    $("a").click(function (event) {
        if (this.hash !== "") {  
            event.preventDefault();          
            var gato = this.hash;            
            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 800, function () {                
                window.location.hash = gato;
            })
        }      
    })

    $(window).scroll(function(){
        if($("#menu").offset().top > 600){
            $("#menu").addClass("bg-nav");
        } else {
            $("#menu").removeClass("bg-nav");
        }
    });

})

