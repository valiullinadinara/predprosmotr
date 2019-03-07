let s = 18473902;
window.onload=function(){
setInterval(function(){
  s+=23820;
  document.getElementById("sum").children[0].innerHTML=s;
},1000)
}

$( "img2" ).on("mouseenter", function() {
  $( "img2" ).animate({
    left: "+=100",
    top: "+=100"
  }, 2000, function() {
  });
});
