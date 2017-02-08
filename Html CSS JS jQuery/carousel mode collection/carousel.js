
    var carousel = {
        currentindex : 0,
        mode : 0,
        intervalTime : 1000,
        imgs:['imgs/1.png','imgs/2.png','imgs/3.png','imgs/4.png',
        'imgs/5.png']
    }
    carousel.total = carousel.imgs.length
    carousel.init = function(){
        for(var index in this.imgs){
            $('.slide-list').append(`<div class="slide-item"><img src = ${this.imgs[index]}></div>`)
            $('.silde-indicator').append(`<div class ='slide-indicator-circle'>${Number(index) + 1}</div>`)
        }
    }
    carousel.classInit = function(){
        var allClass= `active hidden mode0-next-1 mode0-next-2 mode0-prev-1 mode0-prev-2
        mode3-rotateHide mode3-rotateShow mode1-prev-2 mode1-prev-1 mode1-next-2 mode1-next-1
         mode2-prev-1 mode2-next-1 mode2-hidden`
        $('.slide-item').removeClass(allClass)

    }

    //mode1
    carousel.mode0 = function(index){
        carousel.classInit()
         $($('.slide-item')[(index + carousel.total -2) % carousel.total]).addClass('mode0-prev-2')
         $($('.slide-item')[(index + carousel.total -1) % carousel.total]).addClass('mode0-prev-1')
         $($('.slide-item')[(index + carousel.total +2) % carousel.total]).addClass('mode0-next-2')
         $($('.slide-item')[(index + carousel.total +1) % carousel.total]).addClass('mode0-next-1')
         carousel.chagneIndicator(index)
    }

    //mode3--continue
    carousel.mode1 = function(index){
        carousel.classInit()
         $($('.slide-item')[(index + carousel.total -2) % carousel.total]).addClass('mode1-prev-2')
         $($('.slide-item')[(index + carousel.total -1) % carousel.total]).addClass('mode1-prev-1')
         $($('.slide-item')[(index + carousel.total +2) % carousel.total]).addClass('mode1-next-2')
         $($('.slide-item')[(index + carousel.total +1) % carousel.total]).addClass('mode1-next-1')
         carousel.chagneIndicator(index)
    }
    //mode3-->3D
    carousel.mode2 = function(index){
        carousel.classInit()
         $($('.slide-item')[(index + carousel.total -2) % carousel.total]).addClass('mode2-hidden')
         $($('.slide-item')[(index + carousel.total -1) % carousel.total]).addClass('mode2-prev-1')
         $($('.slide-item')[(index + carousel.total +2) % carousel.total]).addClass('mode2-hidden')
         $($('.slide-item')[(index + carousel.total +1) % carousel.total]).addClass('mode2-next-1')
         carousel.chagneIndicator(index)
    }
    //mode4--rotate
    carousel.mode3 = function(index){
        carousel.classInit()
        $('.slide-item').addClass('mode3-rotateHide')
        $('.rotateShow').removeClass('mode3-rotateShow')
        $($('.slide-item')[index]).addClass('mode3-rotateShow')

        carousel.chagneIndicator(index)
    }
    //mode5--normal
    carousel.mode4 = function(index){
        carousel.classInit()
        $('.slide-item').addClass('hidden')
        $($('.slide-item')[index]).removeClass('hidden')
        $($('.slide-item')[index]).addClass('active')
        carousel.chagneIndicator(index)
    }


    //change the Indicator status
    carousel.chagneIndicator =function(index){
        $('.slide-indicator-circle').removeClass('slide-indicator-circle-active')
        $($('.slide-indicator-circle')[index]).addClass('slide-indicator-circle-active')
    }
    //set intervalTime
    carousel.setIntervalTime = function(){
        carousel.setId = setInterval(function(){
            carousel.currentindex = (carousel.currentindex + carousel.total +1 )%carousel.total
            //carousel.mode3(carousel.currentindex)
            carousel.play(carousel.currentindex)
            //console.log(carousel.currentindex)
        },carousel.intervalTime)
    }

    //switch modes
    carousel.switchMode = function () {
        var modelist = [
            {func:carousel.mode0, name:'Carousel-Mode1'},
            {func:carousel.mode1, name:'Carousel-Mode2'},
            {func:carousel.mode2, name:'Carousel-Mode3'},
            {func:carousel.mode3, name:'Carousel-Mode4'},
            {func:carousel.mode4, name:'Carousel-Mode5'},

            //{func:carousel.mode3, name:'Carousel-Mode4'},
        ]
        carousel.play = modelist[carousel.mode].func
        $('input')[0].value=(modelist[carousel.mode].name)
        carousel.mode = (carousel.mode + 1) % modelist.length
        carousel.play(carousel.currentindex)
    }
    carousel.bindSwitch = function () {
        $('input').on('click', carousel.switchMode)
    }

    carousel.bindIndic = function () {
        $('.slide-indicator-circle').on('click',function () {
        console.log(event.target.innerHTML)
        carousel.currentindex = Number(event.target.innerHTML) - 1
        carousel.play(carousel.currentindex)
        })
    }

    carousel.bindBtn = function () {
        $('.slide-btn-prev').on('click', function () {
            carousel.currentindex = (carousel.currentindex + carousel.total - 1) % carousel.total
            console.log('prev')
            carousel.play(carousel.currentindex)
        })
        $('.slide-btn-next').on('click', function () {
            carousel.currentindex = (carousel.currentindex + 1) % carousel.total
            carousel.play(carousel.currentindex)
        })
    }
    carousel.hoverEvent = function(){
        $('.container').hover(function(){
             clearInterval(carousel.setId)
             $('.slide-btn').removeClass('hidden')
        },function(){
             $('.slide-btn').addClass('hidden')
             carousel.setIntervalTime()
        })
    }

    var _main = function(){
        carousel.init()
        carousel.switchMode()
        carousel.play(carousel.currentindex)
        carousel.bindSwitch()
        carousel.bindIndic()
        carousel.bindBtn()
        carousel.setIntervalTime()
        carousel.hoverEvent()
    }
    //carousel.init()
    //carousel.mode2()

    _main()
