$(document).ready(function(){

  $('#button').on('mouseup',function(placeOrderButton){
    alert("confirming your order");
    console.log("place button clicked");

  });

  $('#supbutton').on('click',function(contactInfo){
    alert("contact " + 9443446691 + " for support");
    console.log("support button clicked");
  });
  $('#button').on('mouseleave',function(hoverData){
    console.log('hovered on place order');
  });

  $('ul.parent li').hover(function(){
    $(this).find('ul.child').show(200);
     },function () {
    $(this).find('ul.child').hide(200);
  });

});
