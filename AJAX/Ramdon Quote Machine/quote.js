var getQuote = function() {
    var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/'
    var r = new XMLHttpRequest()
    r.open('POST',url,true)
    r.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    r.setRequestHeader("X-Mashape-Authorization", "ZDRLNucPDUmshnv84BUjqJQcW3ewp1jleEBjsn4t5qLdVhvu5C")
    r.onreadystatechange = function(event){
        if (r.readyState === 4) {
            console.log('reponse',r.response)
            var s = JSON.parse(r.response)
            //console.log(s)
            var sentence = document.querySelector('p')
            document.querySelector('p').innerHTML = '<strong>' + s['quote'] + '</strong>'
            document.querySelector('span').innerHTML='----' + s['author']
        }
    }
    r.send()
}
window.onload = function(){
    getQuote()
}
