smoothScroll.init();
$(document).ready(function(){
    var s = skrollr.init({
    forceHeight: false,
    mobileCheck: function() {
    //hack - forces mobile version to be off
    return false;
    }
    });
    smoothScroll.init({
        speed: 2000, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeOutQuad',
    })
    lightbox.option({
      'wrapAround': true
    })
})

// window.onscroll = function() {
//     var scroll = $(this).scrollTop()
//     $('.navbar-inverse').css('background','rgb(11, 11, 11)')
//     if(scroll < 5){
//         $('.navbar-inverse').css('background','transparent')
//
//     }
// }
