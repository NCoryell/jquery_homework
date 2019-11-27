$("#subscribe").click(function(){
  if (this.checked){
    $("#emailField").css("display","block");
  }
  else {
    $("#emailField").css("display","none");
  }
}
);
