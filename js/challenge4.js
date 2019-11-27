$('#ch4form').submit(function(event) {
  var validInput = true;
  if ($('#fullname').val().length == 0){
    $('#nameerrormsg').show();
    validInput = false;
  }

  else {
    $('#nameerrormsg').hide();
  }

  if ($('#streetaddr').val().length == 0){
    $('#addrerrormsg').show();
    validInput = false;
  }

  else {
    $('#addrerrormsg').hide();
  }

  if (!validInput){
    event.preventDefault();
  }
})
