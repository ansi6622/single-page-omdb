$('.button').on('click', function(){
  var url = 'http://www.omdbapi.com/?s=' + $('input').val();
  $.ajax(url, {dataType: 'json'}).done(function (data) {
    $('#list').empty();
    var source   = $("#movie-summary").html();
    var template = Handlebars.compile(source);
    var context = {movies: data.Search };
    console.log(data.Search)
    var html    = template(context);
    $('#list').append(html);
  });
});

$('#list').on('click', 'a', function () {
  $('a').removeClass('active');
  $(this).addClass('active');
   var id = $(this).data('imdbid');
   var url = 'http://www.omdbapi.com/?i=' + id;
   $.ajax(url, {dataType: 'json'}).done(function (data) {
     console.log(data)
     var source   = $("#movie-show").html();
     var template = Handlebars.compile(source);
     var html    = template(data);
     $('#display').empty();
     $('#display').append(html);
   });
});


Handlebars.registerHelper('formatTime', function(time) {
  return time
});

{{totalDuration songs}}
