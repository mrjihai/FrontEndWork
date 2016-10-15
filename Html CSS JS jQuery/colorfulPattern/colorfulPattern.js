var showPattern = function() {
    var color = ['black','blue','brown','grey','gold','green','red','orange','purple']
    var top = 25
    var left = 25
    var width = 500
    var height = 500
    var body = document.querySelector('body')
    while(width > 50){
        var random_color = Math.floor(Math.random() * 9)
        var addDiv = document.createElement('div')
        addDiv.style.top = top + 'px'
        addDiv.style.left = left + 'px'
        addDiv.style.width = width + 'px'
        addDiv.style.height = height + 'px'
        addDiv.style.background = color[random_color]
        body.appendChild(addDiv)
        top += 10
        left += 10
        width -= 20
        height -= 20
    }
}
showPattern()
