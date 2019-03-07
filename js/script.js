

// $( "#img2" ).on("mouseenter", function() {
//   $( "#img2" ).animate({
//
//     left: "+=1050",
//     top: "+=350"
//
//   }, 2000, function() {
//   });
// });


var s = 18473902;
window.onload=function(){
setInterval(function(){
  s+=23820;
  document.getElementById("sum").children[0].innerHTML=s;
},1000)
}
