
var player = $('audio')[0]

var songs =[
    {id:'0', name:'music 1', artist:'unknown', musicUrl:'music/music (1).mp3',imgUrL:'music_images/music1.jpg',duration:'0:30'},
    {id:'1', name:'music 2', artist:'unknown', musicUrl:'music/music (2).mp3',imgUrL:'music_images/music2.jpg',duration:'0:30'},
    {id:'2', name:'music 3', artist:'unknown', musicUrl:'music/music (3).mp3',imgUrL:'music_images/music3.jpg',duration:'0:30'},
    {id:'3', name:'music 4', artist:'unknown', musicUrl:'music/music (4).mp3',imgUrL:'music_images/music4.jpg',duration:'0:30'},
    {id:'4', name:'music 5', artist:'unknown', musicUrl:'music/music (5).mp3',imgUrL:'music_images/music5.jpg',duration:'0:30'},
    {id:'5', name:'music 6', artist:'unknown', musicUrl:'music/music (6).mp3',imgUrL:'music_images/music6.jpg',duration:'0:31'},
    {id:'6', name:'music 7', artist:'unknown', musicUrl:'music/music (7).mp3',imgUrL:'music_images/music7.jpg',duration:'0:33'},
    {id:'7', name:'music 8', artist:'unknown', musicUrl:'music/music (8).mp3',imgUrL:'music_images/music8.jpg',duration:'0:32'},
]

//初始化开始的播放歌曲显示,时间显示,
var initName = function (){
    $('.song-name').html(songs[0].name)
    $('.song-id').html(songs[0].id)
    $('.song-artist').html(songs[0].artist)
    player.src = songs[0].musicUrl
    $('.duration').html(songs[0].duration)
}

//初始化播放列表
var initPlayList = function(){
    $('.song-list-head').html('<p class = "list-title">Playlist('+ songs.length +')</p>')
    for (var i = 0; i < songs.length; i++) {
        $('.song-list').append(`
            <li class='song-list-name' data-index = ${songs[i].id}>
            <i class = 'list-play-icon' data-index = ${songs[i].id}></i>
            &nbsp${songs[i].name} -
            <span class="list-artist" data-index = ${songs[i].id}>${songs[i].artist}</span>
            </div>
            `)
    }

}

//显示当前播放时间
var showCurrentTime = function() {
    var currentTime = player.currentTime
    var minute = Math.floor(currentTime/60)
    var second = Math.floor(currentTime%60)
    var time = 0
    if(second <10){
         time = minute + ':'+ '0'+second

    }else{
         time = minute + ':'+second
    }
    //console.log(width.toFixed(1))
    //console.log(time)
    //$('.current-time').html(time)
    $('.current-time').html(time)
    var value = player.currentTime / player.duration*100
    showTimeProgress(value)
    }

//显示时间进度条
var showTimeProgress = function(value){
    //console.log($('.time-progress-rate')[0])
    $('.time-progress-rate')[0].value = value
    var rate = $('.time-progress-rate')[0].value/100
    $('.progress-fill').width(rate*152)

}

//函数:根据歌曲的ID改变背景图片,包括虚化背景和磁盘背景
var changeBackgroundImg = function(id){
        $(".container1").css('background-image',"url("+songs[id].imgUrL+")")
        $(".list-container-bg").css('background-image',"url("+songs[id].imgUrL+")")
        //console.log(song[id])
        $(".disk-images")[0].src=songs[id].imgUrL

}

//根据音乐在数据中的ID播放
var playBySongId = function(id){
    //console.log('yunxing id')
    player.src = songs[id].musicUrl
    $('.song-name').html(songs[id].name)
    $('.song-id').html(songs[id].id)
    $('.song-artist').html(songs[id].artist)

    //console.log($('.songname'))
    $(player).on('canplay',function(){
        $('.disk-cover').css('animation-play-state','running')
        $('.disk-images').css('animation-play-state','running')
        showDuration()
    })
    play()
    changeBackgroundImg(id)
    addlistIcon(id)
}

//显示歌曲时间
var showDuration = function(){
    var duration = player.duration
    var minute = Math.floor(duration/60)
    var second = Math.floor(duration%60)
    var time = minute + ':'+second
    //console.log(time)
    $('.duration').html(time)
}

//函数:播放下一首
var next = function(){
        var CurrentIndex = Number($('.song-id').html())

        var nextId = (CurrentIndex+songs.length+1)%songs.length
        //console.log(id)
        playBySongId(nextId)
}

//函数:播放上一首
var prev = function(){
    var CurrentIndex = Number($('.song-id').html())
    var prevId =(CurrentIndex -1 + songs.length)%songs.length
    //console.log(prevId)
    playBySongId(prevId)

}

//函数:暂停
var pause = function() {
        var  target = $('.play')
        target.removeClass('pause-icon')
        target.addClass('play-icon')
        target[0].src='images/play.png'
        $('.disk-cover').css('animation-play-state','paused')
        $('.disk-images').css('animation-play-state','paused')
        needleOut()
        player.pause()
}
//函数:播放
var play = function(){
        var  target = $('.play')
        target.removeClass('play-icon')
        target.addClass('pause-icon')
        target[0].src='images/pause.png'
        $('.disk-cover').css('animation-play-state','running')
        $('.disk-images').css('animation-play-state','running')
        needleIn()
        player.play()
        var id = Number($('.song-id').text())
        addlistIcon(id)
}

//函数:磁盘播放器指针移入
var needleIn = function(){
    $('.disk-needle').removeClass('needle-pause')
    $('.disk-needle').addClass('needle-play')
}

//函数:磁盘播放器指针移出
var needleOut = function(){
    $('.disk-needle').addClass('needle-pause')
    $('.disk-needle').removeClass('needle-play')
}

//函数:开关音效
var setSound = function(){
    var sound = $('.sound')
    //console.log(sound)
    if(sound.hasClass('soundopen')){
        sound.removeClass('soundopen')
        $('.sound')[0].src='images/mute.png'
        player.muted=true
    }else{
        sound.addClass('soundopen')
        $('.sound')[0].src='images/sound.png'
        player.muted=false
    }
}

//函数:设置音量
var setVolume = function(){
    var volume = $('.volume')[0].value
    console.log('value',volume)
    player.volume = volume/100
    if(player.volume == 0){
        $('.sound').removeClass('soundopen')
        $('.sound')[0].src='images/mute.png'
    }else{
        $('.sound').addClass('soundopen')
        $('.sound')[0].src='images/sound.png'
    }
}

//函数:设置进度条
var setTimeProgress = function() {
    var rate = $('.time-progress-rate')[0].value/100
    //console.log(rate)
    var newtime = rate * player.duration
    //console.log(newtime)
    player.currentTime = newtime
    $('.progress-fill').width((rate*155).toFixed(0))
}

//函数:根据播放模式来播放歌曲
var playMode = function(){
    if($('.play-mode').hasClass('random')) {
        var check = true
        var CurrentIndex = Number($('.song-id').text())
        var id = 0
        //console.log('before while')
        while(check){
         id = Math.floor(Math.random()*songs.length)
         if(id != CurrentIndex ){
             check =false
         }
        }
        playBySongId(id)
    }else if ($('.play-mode').hasClass('loop')) {
        next()
    }else  if ($('.play-mode').hasClass('repeat')){
        var CurrentIndex = Number($('.song-id').text())
        playBySongId(CurrentIndex)
    }

}

//函数:设置播放模式
var setPlayMode = function(){
        if($('.play-mode').hasClass('random')){
            $('.play-mode').removeClass('random')
            $('.play-mode').addClass('loop')
            $('.play-mode')[0].src ='images/loop.png'
            $('.notice').css('display','block')
            $('.mode-notice').html('Normal')
            setTimeout(function () {
                $(".notice").css('display','none')}, 500);
        }else if($('.play-mode').hasClass('loop')){
            $('.play-mode').removeClass('loop')
            $('.play-mode').addClass('repeat')
            $('.play-mode')[0].src ='images/repeat.png'
            $('.notice').css('display','block')
            $('.mode-notice').html('Repeat')
            setTimeout(function () {
                $(".notice").css('display','none')}, 500);
        }else if($('.play-mode').hasClass('repeat')){
            $('.play-mode').removeClass('repeat')
            $('.play-mode').addClass('random')
            $('.play-mode')[0].src ='images/random.png'
            $('.notice').css('display','block')
            $('.mode-notice').html('Shuttle')
            setTimeout(function () {
                $(".notice").css('display','none')}, 500);
        }
}

//播放列表点击事件
var clickPlayList = function() {
    $('.song-list').on('click',function(){
        var target = $(event.target)
        var index = target.data('index')
        //console.log(target)
        playBySongId(index)
    })
}

//函数：为列表中播放的歌曲添加声音符号
var addlistIcon = function(index){
    $('.list-play-icon').removeClass('fa-volume-up')
    var target =$('.song-list-name')[index]
    //console.log(target)
    var icon =$(target).find('i')
    //console.log(icon)
    icon.addClass('fa fa-volume-up')
}

//点击事件
var audioEvent = function() {

    $(player).on('timeupdate',function(){
         showCurrentTime()

    })
    $(player).on('ended',playMode)
    $('.play').on('click',function(){
        if($('.play').hasClass('play-icon')){
            play()
        }else{
            pause()
        }
    })
    $('.next').on('click',next)
    $('.prev').on('click',prev)
    $('.sound').on('click',setSound)
    $($('.volume')[0]).on('input',setVolume)
    $($('.time-progress-rate')[0]).on('input',setTimeProgress)
    $('.play-mode').on('click',setPlayMode)
    $('.playlist').on('click',function(){
        //console.log('123')
        $('.list-container').css('display','inline-block')
    })
    $('.list-close').on('click',function(){
            $('.list-container').css('display','none')

    })
}

initName()
initPlayList()
audioEvent()
clickPlayList()
