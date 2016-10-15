
var generateFace = function(){
    var i = 0
    while (i < 5) {
        var randomTop = Math.floor(Math.random()*500)
        var randomLfet = Math.floor(Math.random()*500)
        var addImg = document.createElement('img')
        //console.log(addImg)
        addImg.style.top = randomTop + 'px'
        addImg.style.left = randomLfet + 'px'
        addImg.src = 'http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png'
        addImg.setAttribute('data-id',i)
        document.querySelector('#leftSide').appendChild(addImg)
        i++
    }
}
var copyToRight = function(){
    var i = 0
    var left = document.querySelector('#leftSide').children.length
    var right = document.querySelector('#rightSide')
    while (i < left) {
        var s = document.querySelector('#leftSide').children[i]
        var clone = s.cloneNode(true)
        right.appendChild(clone)
        i++
    }
    right.lastChild.remove()

}
var addClickButton = function(){
    var click = document.querySelector('#leftSide')
    click.addEventListener('click',function(event){
        var target = event.target
        var extraFace = click.children[click.children.length-1]
        if(extraFace == target){
            target.remove()
            generateFace()
                copyToRight()
        }else if(target == click ) {
            alert('please click the face')
        }else{
            var r = confirm('game over,do you want try again? ')
            if(r){
                window.location.reload()
            }else{
            }
        }
    })
}

var _main = function() {
    addClickButton()
    generateFace()
    copyToRight()
}
_main()
