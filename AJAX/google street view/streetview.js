function loadData(){
    var streetName = $('#street').val()
    var cityName = $('#city').val()
    var nytArticle = $('#nytimes-articles');
    var wikiLinks = $('#wikipedia-links')

    var address = streetName + ' ' + cityName
    var ny = $('#ny')
    var streetview = $('#streetview')
    var greeting = $('#greeting')

    nytArticle.text('')
    wikiLinks.text('')
    greeting.text('The place you want to live is ' + address)
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';

    $('body').append('<img src="' + streetviewUrl + '">');
    // $('body').css({
    //     'background-image':'url(' + 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=dc' + ')',
    //     'background-size':'cover',
    // })

    var nytimesUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    nytimesUrl += '?' + $.param({
      'api-key': "1117eebf04e143b5b3aef6436209facc",
      'q':address,
      'sort': "newest"
    });

    $.ajax({
      url: nytimesUrl,
      method: 'GET',
    }).done(function(data) {
      var article = data.response.docs
      $('#nytimes-header').text('New York Times Articles For' + ' ' + address)
      for(var i = 0; i < article.length-5; i++){
        nytArticle.append('<li><a href="'+article[i].web_url+'">'+article[i].headline.main+'</a>'+
                '<p>' + article[i].snippet + '</p>'+'</li>')
      }
    }).fail(function(err) {
      $('#nytimes-header').text('Sorry,New York Times Articles Cannot Be Loaded...')
    })


    $.ajax({
          url: 'https://en.wikipedia.org/w/api.php',
          data: { action: 'query', list: 'search', srsearch: address,
                 format: 'json', srlimit:'10'},
          dataType: 'jsonp',
      }).done(function(data){
          var wiki = data.query.search
          //console.log(wiki)
          $.each(wiki,function(i,v){
              var wikiLinkUrl = 'https://en.wikipedia.org/wiki/' + wiki[i].title
              wikiLinks.append('<li><a href= '+ wikiLinkUrl+'>' + wiki[i].title + '</li>')
          })
      }).fail(function(err){
          wikiLinks.text('Sorry, Wikipeida Resources Cannot Be Loaded')
      })

}

$('#submit').on('click',loadData)
