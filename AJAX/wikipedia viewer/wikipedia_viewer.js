var getArticle = function(){
    $('input').on('keyup',function(){
        $('.result').empty()
        $.ajax({
           url: 'https://en.wikipedia.org/w/api.php',
           data: { action: 'query', list: 'search', srsearch: $('input').val(),
                  format: 'json', srlimit:'10'},
           dataType: 'jsonp',
           success: function (data) {
               console.log(data)
               var array = data.query.search
               console.log(array)
               console.log(array.length)
               array.map(function(s){
                   console.log('s--->',s['title'])
                   insertArticle(s['title'],s['snippet'])
               })
           }
         });

    })
}

var insertArticle = function(title,content){
    var temple =`
        <div class='article'>
            <a href='https://en.wikipedia.org/wiki/${title}'><h2>${title}</h2></a>
            <p>${content}</p>
        </div>
    `
    $('.result').append(temple);

}
getArticle()
