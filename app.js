$(function(){

  $('button').on("click", function() {
    $(this).siblings('div').slideToggle();
  });

})
