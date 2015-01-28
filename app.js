$('.button').on('click', function(){
  var url = 'http://www.omdbapi.com/?s=' + $('input').val();
  $.ajax(url, {dataType: 'json'}).done(function (data) {
    $('#list').empty();
    for(var i = 0; i < data.Search.length; i++) {
      var element = '<a class="step" data-imdbId="'+data.Search[i].imdbID + '"><div class="content"><div class="title">'+ data.Search[i].Title + '</div><div class="description">'+ data.Search[i].Year + '</div></div></a>';
      $('#list').append(element);
    }
  });
});

$('#list').on('click', 'a', function () {
  $('a').removeClass('active');
  $(this).addClass('active');
   var id = $(this).data('imdbid');
   var url = 'http://www.omdbapi.com/?i=' + id;
   $.ajax(url, {dataType: 'json'}).done(function (data) {

     var el = '<div class="ui segment">\
       <img class="ui left floated image" src="'+ data.Poster +'">\
       <p><div class="ui red horizontal label">Year</div>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>\
       <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>\
       <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>\
       </div>';

     $('#display').empty();
     $('#display').append(el);
   });
});
