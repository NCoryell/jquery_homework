$(document).ready(function(){

$("#ch3form").submit(function(x){

  if(!$("input[name=fruit]:checked").length){
    console.log("not checked");
    alert("You must pick a fruit!");
    x.preventDefault();
  }

  if(!$("input[name=standing]:checked").length){
    console.log("not checked");
    alert("You must pick a standing!");
    x.preventDefault();
  }
  })
})
