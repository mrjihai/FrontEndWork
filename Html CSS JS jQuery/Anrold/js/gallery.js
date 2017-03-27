
$(document).ready(function(){

    for(let i = 1; i <= 19; i++){
        var html = `
            <div class = 'grid-item'>
                <img src ='imgs/gallery/${i}.jpg'>
            </div>
        `
        // console.log(html);
        $('.grid').append(html)
    }
    //waterf
    var $grid = $('.grid').masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.masonry();
    });

});
