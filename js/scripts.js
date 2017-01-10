$(document).ready(function() {

  $(".click-show").click(function() {
    $("#initially-hide").toggle();
    $("#initially-show").toggle();
  });

  $(".click-slide").click(function() {
    $("#initially-hide").slideToggle();
    $("#initially-show").slideToggle();
  });

  $(".click-fade").click(function() {
    $("#initially-hide").fadeToggle(5000);
    $("#initially-show").fadeToggle(5000);
  });


});
