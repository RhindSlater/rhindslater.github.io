$(".homeSouth").click(function() {
    var offset = 60;
    if($(window).width() < 992) {
        offset = 54;
    }
    $('html,body').animate({
        scrollTop: $(".aboutMe").offset().top - offset},'slow');
});

var mouseOverToggle = 1;
function mouseOver() {
    mouseOverToggle++;

    if(mouseOverToggle % 2 == 0) {
        $('.backBlur').css({
            "-webkit-transition":"all 0.3s ease-out",
            "transition":"all 0.3s ease-out",
            "background-color":"rgba(0,0,0,0)"
        });
    }
    else {
        $('.backBlur').css({
            "-webkit-transition":"all 0.3s ease-out",
            "transition":"all 0.3s ease-out",
            "background-color":"rgba(0,0,0,0.5)"
        });
    }
}

$(document).ready(function(){
    function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        /* Applying the top margin on modal dialog to align it vertically center */
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);
    
    // Align modal when user resize the window
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });   
});

$(document).ready(function(){
    $('.center').animate( {top: '50%'}, 850, function(){
        $('.fixed-top').animate({top: '0'}, 300, function(){
            
            $('.center').animate( {left: '50%'}, 350);
        });
    });
});