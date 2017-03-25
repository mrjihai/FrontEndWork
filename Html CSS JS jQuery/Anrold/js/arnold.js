
$(document).ready(function(){

    $('.dropdown-menu').on('click',function(){

        if($('.menu').css('display') =='none'){
            $('.menu').css('display','block')
        }else{
            $('.menu').css('display','none')
        }
    })
    $('.menu').on('mouseleave',function(){
        setTimeout(function(){$('.menu').css('display','none')},500)

    })
    var movieColletion ={
        '2013':'https://www.youtube.com/embed/oc0x-jiewTE?autoplay=1',
        '2012':'https://www.youtube.com/embed/xtpdj31wshI?autoplay=1',
        '2003':'https://youtube.com/embed/zdYYI_2Tudg?autoplay=1',
        '2002':'https://www.youtube.com/embed/tkBe-XRtq30?autoplay=1',
        '2000':'https://www.youtube.com/embed/Sz-Abh8opLo?autoplay=1',
        '1999':'https://www.youtube.com/embed/SzkwtbyiaME?autoplay=1',
        '1994':'https://www.youtube.com/embed/3B7HG8_xbDw?autoplay=1',
        '1991':'https://www.youtube.com/embed/lwSysg9o7wE?autoplay=1',
        '1990':'https://www.youtube.com/embed/WFMLGEHdIjE?autoplay=1',
        '1988':'https://www.youtube.com/embed/qtlB7q96NMs?autoplay=1',
        '1987':'https://www.youtube.com/embed/Y1txEAywdiw?autoplay=1',
        '1982':'https://www.youtube.com/embed/z5wwd1VkPd4?autoplay=1',
        '1977':'https://www.youtube.com/embed/mwIGjTj97hg?autoplay=1',
    }
    $('.index-slides').owlCarousel({
        items:1,
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,

    })

    $('.movie-slides').owlCarousel({
        items:5,
        loop:true,
        nav:true,
        mouseDrag:true,
        dotsEach:3,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
    })

    $('.owl-prev').text('<')
    $('.owl-next').text('>')

    $('.item').on('click',function(){
        let movie = $(this).find('p').text()
        let movieUrl = movieColletion[movie]
        $('iframe').remove()
        $('.movie-video').append(
            `<iframe src='${movieUrl}' allowfullscreen>
            </iframe>`
        )
    })

});
