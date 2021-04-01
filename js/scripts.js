$(document).ready(function() {
    $(".active_share").hide()
    $(".share").click(function(){
      $(".active_share").toggle();
      $(".share").toggleClass("clicked");
    });
  });