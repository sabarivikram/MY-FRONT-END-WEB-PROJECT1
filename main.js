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
    $(this).find('ul.child').show();
     },function () {
    $(this).find('ul.child').hide();
  });
  $('#place-order').on('click',function(e){
    e.preventDefault();
    console.log('prevented');
  });

  $(document).on('mousedown',function(event){
    event.stopPropagation();
    switch (event.which) {
      case 1:
        console.log('left clicked', event.pageY, event.pageX);
        break;
      case 2:
        console.log('middle clicked', event.pageY, event.pageX);
        break;
      case 3:
        console.log('right clicked', event.pageY, event.pageX);
        break;
      default:
          console.log('error');
    }
  });


/*  $(document).on('contextmenu',function(){
    return false;
  });


 $(document).on('mousedown',function(con){
  con.preventDefault();

    if(con.which== 3){

      $('.hidden').fadeOut();

      if($(con.target).is('img')){
        console.log('img clicked');
        $('.opentab').fadeIn();
      }

      $('#context').css({
        top:con.pageY,left:con.pageX
      });

      $('#context').fadeIn();
      return false;
    }
  $('#context').fadeOut();
});
*/




});
