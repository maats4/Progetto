$(document).ready(function () {
  $("#caricamento").delay(3600).fadeOut(1700)});

$(".fa-envelope").mouseover(function () {
$("#mail1").addClass("show");

});

$("#mail").mouseleave(function () {
  $("#mail1").removeClass("show");


});

$(".fa-phone").mouseover(function () {
$("#numero").addClass("show");
});

$(".fa-phone").mouseleave(function () {
  $("#numero").removeClass("show");
});

$("#quote1").mouseover(function(){
  $("#author1").show(600);
  $(this).css({"height":"60px"});
});

$("#quote1").mouseleave(function () {
  $("#author1").hide(400);
  $("#quote1").css({"height":"20px"});
});

$("#quote2").mouseover(function(){
  $("#author2").show(400)
  $(this).css({"height":"60px"});
});

$("#quote2").mouseleave(function () {
  $("#author2").hide(400);
  $(this).css({"height":"20px"});

});
