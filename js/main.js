$(document).ready(function () {
    var swiper = new Swiper(".specialwrap", {
        loop: true,
        pagination: {
            el: ".special .swiper-pagination",
            clickable: true,
          }//scrollbar
          
    });//specialswiper

    var lifeSwiper = new Swiper(".life .swiper", {
        slidesPerView: "auto",
        // spaceBetween: 30,
        freeMode: true,
        scrollbar: {
            el: ".life .swiper-scrollbar",
            hide: true,
        },
      });


   
    $(".box a").on("click",function(e){e.preventDefault()})
    $(".box").on("click", function(){
        var thumb = $(this).find("img").attr("src")
        console.log(thumb)
        $(this).parents(".con").children("a").find("img").attr("src",thumb)
    })


    $(".steady .wrap > div").slick({
        slidesToShow: 3,
        slidesToScroll: 1
      });

    

    
    
}); //document
