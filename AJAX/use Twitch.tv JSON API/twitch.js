var channel =['ESL_CSGO',"ESL_SC2",'dota2ruhub','starladder_cs_en',
'esl_alphacast','habathcx','RobotCaleb']
var baseUrl = 'https://api.twitch.tv/kraken'
var client_id = "?client_id=46hbi8qowcxio247zvquaulajxua56"

https://api.twitch.tv/kraken/streams/ESL_SC2/?client_id=46hbi8qowcxio247zvquaulajxua56&

var initialInfo = function(){

    for (var i = 0; i < channel.length; i++) {

        (function(i){
            var Url = baseUrl + '/streams/'+ channel[i]+client_id +'&callback=?'
            var name = channel[i]
            //console.log(name)
            $.getJSON(Url,function(data){
                if(data.stream == null){
                    console.log(name)
                    var Url = baseUrl + '/users/'+ name +client_id +'&callback=?'
                    $.getJSON(Url,function(data){
                        //console.log('offline')
                        var userName = data.display_name
                        var userLogo = data.logo
                        var temp = offline_temp(userName,userLogo)
                        $('#id-info-display').append(temp)
                    })
                }
                else{
                    //console.log('online')
                    //console.log(data)
                    var channelName = data.stream.channel.display_name
                    var channelGame = data.stream.game
                    var channelLogo = data.stream.channel.logo
                    var channelUrl = data.stream.channel.url
                    var channelStatus = data.stream.channel.status
                    //console.log(data.stream.game)
                    var temp = online_temp(channelName,channelLogo,channelGame,
                        channelStatus,channelUrl)
                    $('#id-info-display').append(temp)
                }
            })
        })(i)
    }
}

var online_temp = function(name,logo,game,status,url){
    var s = `
        <div class='info-online'>
            <a href = ${url} target ='_blank'>
                <div class='info-left'>
                    <img class = 'logo 'src = ${logo}>
                </div>
                <div class= info-right>
                    <h4>${name}</h4>
                    <p>Game:${game}</p>
                    <p>${status}</p>
                </div>
            </a>
        <div>
        `
    return s
}

var offline_temp = function(name,logo){
    var s = `
        <div class= 'info-offline'>
            <a href =''target = '_blank'>
                <div class='info-left'>
                    <img class ='logo' src = ${logo}>
                </div>
                <div class = 'info-right'>
                    <h4>${name}</h4>
                    <p>offline</p>
                </div>
            </a>
        </div>
        `
    return s
}

var click = function(){

    $('.all').on('click',function(){
        $('.all').addClass('ative')
        $('.offline').removeClass('active')
        $('.online').removeClass('active')
        $('.info-online').removeClass('hidden')
        $('.info-offline').removeClass('hidden')
    })

    $('.online').on('click',function(){
        $('.all').removeClass('active')
        $('.offline').removeClass('active')
        $('.online').addClass('active')
        $('.info-online').removeClass('hidden')
        $('.info-offline').addClass('hidden')
    })

    $('.offline').on('click',function(){
        $('.all').removeClass('active')
        $('.online').removeClass('active')
        $('.offline').addClass('active')
        $('.info-online').addClass('hidden')
        $('.info-offline').removeClass('hidden')
    })
}


initialInfo()
click()
