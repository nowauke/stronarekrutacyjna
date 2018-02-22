$(function () {
var section = $(".sixth-section");
var facebook = $(".facebook-icon");
$(window).scroll(function () {
    var scroll=$(this).scrollTop()+$(this).height();
    section.each(function(i,n){
        if(scroll > $(this).offset().top) {
            facebook.eq(i).css({'position':'absolute'});
            if(i>0){
            }
        }
        if(scroll < ($(this).offset().top + facebook.eq(i).height()))  {
            facebook.eq(i).css({'position':'fixed',"top":""});
        }
    }); 
});
   
});

