
 function catalogSlider(){
    if(document.querySelector(".mySwiper1")){
        var swiper = new Swiper(".mySwiper1", {
            slidesPerView: 4.5,
            spaceBetween: 30,
            allowSlidePrev: false,
            loop: true,




          });



}

}

 function catalogSlider2(){
    if(document.querySelector(".mySwiper2")){
        var swiper = new Swiper(".mySwiper2", {
            slidesPerView: 4.5,
            spaceBetween: 30,
            allowSlideNext: false,
            loop: true,




          });



}

}
catalogSlider()
catalogSlider2()