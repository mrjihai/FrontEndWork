
$(document).ready(function(){
    setTimeout(function(){
    var loader = $("#loader-wrapper")
    setTimeout(function(){
        $('.home-bg').find('video').css('display','block')
        // document.getElementById('myVideo').playbackRate =2
        loader.css('display','none')
        document.getElementById('myVideo').playbackRate=2
        decodeText();
        setTimeout(function(){
            $('.home-button').css('display','block').fadeIn()
        },2000)
        }
        ,1000)
    },2000)//强制显示loading page 1s
})


function decodeText(){

    // get nodelist
    var text = document.getElementsByClassName('decode-text')[0];

    // console.log(text);
    // console.log(text.children.length);

    // assign the placeholder array its places
    var state = [];
    for(var i = 0, j = text.children.length; i < j; i++ ){
        state[i] = i;
    }

    // shuffle the array places to get randomness
    var shuffled = shuffle(state);

    for(var i = 0, j = shuffled.length; i < j; i++ ){

        var child = text.children[shuffled[i]];
        classes = child.classList;

        // fire the first one at random times
        var state1Time = Math.round( Math.random() * (2000 - 300) ) + 50;
        if(classes.contains('text-animation')){
            setTimeout(firstStages.bind(null, child), state1Time);
        }
    }

}
// send the node for later .state changes
function firstStages(child){
    if( child.classList.contains('state-2') ){
        child.classList.add('state-3');
    } else if( child.classList.contains('state-1') ){
        child.classList.add('state-2')
    } else if( !child.classList.contains('state-1') ){
        child.classList.add('state-1');
        setTimeout(secondStages.bind(null, child), 100);
    }
}
function secondStages(child){
    if( child.classList.contains('state-1') ){
        child.classList.add('state-2')
        setTimeout(thirdStages.bind(null, child), 100);
    }
    else if( !child.classList.contains('state-1') )
    {
        child.classList.add('state-1')
    }
}
function thirdStages(child){
    if( child.classList.contains('state-2') ){
        child.classList.add('state-3')
    }

}
function shuffle(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
