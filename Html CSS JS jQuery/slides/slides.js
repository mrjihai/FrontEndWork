var play = function(offset) {
    var activeIndex = $('.slide-images').data('active')
    var numberOfImgs = $('.slide-images').data('imgs')
    var i = (activeIndex + numberOfImgs + offset)% numberOfImgs
    //console.log(i)
    $('.slide-images').data('active',i)

    $('.slide-active').fadeOut()
    $('.slide-active').removeClass('slide-active')

    $($('.slide-img')[i]).addClass('slide-active')
    $($('.slide-img')[i]).fadeIn()

    //indiactor
    $('.slide-item-active').removeClass('slide-item-active')
    $($('.slide-item')[i]).addClass('slide-item-active')
}
var playPrev = function() {
    play(-1)
}
var playNext = function() {
    play(1)
}
var buttonClick = function() {
    $('.slide-button').on('click',function(event){

        clearInterval(n)
        var button = $(event.target)
        if(button.hasClass('slide-button-left')){
            play(-1)
        }else {
            play(1)
        }
    })

}
var mouseAction = function() {
    $('.slide').on('mouseover',function(){
        clearInterval(n)
        $('.slide-button-active').removeClass('slide-button-active')
    })
    $('.slide').on('mouseout',function(){
        $('.slide-button').addClass('slide-button-active')
        autoPlay()
    })

    $('.slide-item').hover(function(event){
        var index = $(event.target).html()-1
        if($(event.target).hasClass('slide-item-active')){
        }else{
            $('.slide-item-active').removeClass('slide-item-active')
            $(event.target).addClass('slide-item-active')

            $('.slide-active').fadeOut()
            $('.slide-active').removeClass('slide-active')
            $($('.slide-img')[index]).addClass('slide-active')
            $($('.slide-img')[index]).fadeIn()

        }
    })
}
var autoPlay = function(){
     n = setInterval('play(1)',3000)
}

var _main = function() {
    autoPlay()
    buttonClick()
    mouseAction()
}
_main()
