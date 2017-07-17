var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
});



$('.content-performance').mouseover(function(){
    var s = event.target
    $('.content-performance').find('div').css('display','block')
})

$('.content-performance').mouseleave(function(){
    $('.content-performance').find('div').css('display','none').fadeOut()
})

$('.content-design').mouseover(function(){
    var s = event.target
    $('.content-design').find('div').css('display','block')
})

$('.content-design').mouseleave(function(){
    $('.content-design').find('div').css('display','none').fadeOut()
})

$('.content-handling').mouseover(function(){
    var s = event.target
    $('.content-handling').find('div').css('display','block')
})

$('.content-handling').mouseleave(function(){
    $('.content-handling').find('div').css('display','none').fadeOut()
})

$('.content-technology').mouseover(function(){
    var s = event.target
    $('.content-technology').find('div').css('display','block')
})

$('.content-technology').mouseleave(function(){
    $('.content-technology').find('div').css('display','none').fadeOut()
})

// window.onscroll = function() {
//     var scroll = $(this).scrollTop()
//     $('.navbar-inverse').css('background','rgb(11, 11, 11)')
//     if(scroll < 5){
//         $('.navbar-inverse').css('background','transparent')
//
//     }
// }
