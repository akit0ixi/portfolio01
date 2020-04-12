$(function(){
  $('.Index-btn').click(function(){
    $('.Index-btn').css('color','black')
    $('.act').removeClass('act');
    var clickIndex = $('.Index-btn').index($(this));
    $('.slide').eq(clickIndex).addClass('act');
    $('.Index-btn').eq(clickIndex).css('color','white');
    
  });

  $('.prj').click(function(){
    $('.disp').removeClass('disp');
    $('.action').removeClass('action');
    var yajiIndex = $('.prj').index($(this));
    // $('.gala h1').text(yajiIndex);
    $('.yaji').eq(yajiIndex).addClass('disp');
    $('.de-contents').eq(yajiIndex).addClass('action');
    

  });




  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    },500 );
  });


});