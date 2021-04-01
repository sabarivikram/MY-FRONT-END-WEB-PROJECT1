alert("This page is for business purpose only");


var btn=document.getElementById("button");
function placeOrderButton()
{
  alert("confirming your order");
  console.log("place button clicked");
}
btn.addEventListener("click", placeOrderButton);



var supbtn=document.getElementById("supbutton");
function contactInfo()
{
  alert("contact " + 9443446691 + " for support");
  console.log("support button clicked");
}
supbtn.addEventListener("click",contactInfo);
