$(".nav-link").click(function(){
    var target = $(this).attr("to");
    var offset = $("#" + target).offset();
    console.log(offset);
   $('html, body').animate({scrollTop: offset.top - 70});
});
