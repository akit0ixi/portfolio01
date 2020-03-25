$ (function(){

$('.index-btn').click(function(){
  $('.active').removeClass('active');
  $('.index-btn').text('○');
  var clickIndex = $('.index-btn').index($(this));
  $('.slide').eq(clickIndex).addClass('active');
  $('.index-btn').eq(clickIndex).text('◉');
  
});

$('.list-item').click(function(){
  var $answer = $(this).find('.answer');
  if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
    $(this).children('span').text('+');
  }else{
    $answer.addClass('open');
    $answer.slideDown();
    $(this).children('span').text('-');
  }

});

$('header a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html, body').animate({
    'scrollTop': position
  },500 );
});






});
