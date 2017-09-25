$(document).ready(function(){
    
//    $("#current")
//        .hover(function(){
//        $("#loose-leaf").toggleClass("open");
//        $("#current").toggleClass("open");
//    });
    
    $("#main").hover(function(){
        $("#loose-leaf").toggleClass("open");
        $("#current").toggleClass("open");    
    });
    
    $("#harris").hover(function(){
        $("#harris-clook").toggleClass("open")
        $("#current").toggleClass("open");    
    });
    
    $("#polly").hover(function(){
        $("#polly-gilroy").toggleClass("open");
        $("#current").toggleClass("open");    
    }); 

    $("#robert").hover(function(){
        $("#robert-laking").toggleClass("open");
        $("#current").toggleClass("open");    
    });
    
    $("#designers").hover(function(){
        $("#ruby-alf").toggleClass("open");
        $("#current").toggleClass("open");    
    });

    
//        .mouseleave(function(){
//        $("#loose-leaf").css("display", "none");
//        $("#current").css("display", "inline-block");
//    });
//    
    $(".card:nth-child(4n + 1)").click(function(){
        $(".card:nth-child(4n + 1) .back").toggleClass("open");
        $(".card:nth-child(4n + 1) .front").toggleClass("open");
    });
    
    $(".card:nth-child(4n + 2)").click(function(){
        $(".card:nth-child(4n + 2) .back").toggleClass("open");
        $(".card:nth-child(4n + 2) .front").toggleClass("open");
    });
    
    $(".card:nth-child(4n + 3)").click(function(){
        $(".card:nth-child(4n + 3) .back").toggleClass("open");
        $(".card:nth-child(4n + 3) .front").toggleClass("open");
    });
    
    $(".card:nth-child(4n)").click(function(){
        $(".card:nth-child(4n) .back").toggleClass("open");
        $(".card:nth-child(4n) .front").toggleClass("open");
    });
    
});