$(document).ready(function () {
  // Play the loading and ding noise:
  // Audio code adapted from: http://jsfiddle.net/gD4Dr/35/
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', "../audio/loading-ding.mp3");
  audioElement.setAttribute('autoplay', 'autoplay');
  audioElement.play();
  
  // Convert the page to show 'loading' stuff:
  $(".loading").addClass("spinner");
  $(".rank-number").addClass("no-viz");
  $(".current-rank-badge").addClass("hide");
  $(".admin-message").html("It is under search&#183;&#183;&#183;");
  
  // Run these after 1500 milliseconds:
  setTimeout(function () {
    $(".loading").removeClass("spinner");
    $(".rank-number").removeClass("no-viz");
    $(".current-rank-badge").removeClass("hide").addClass("nudge-to-show");
    $(".admin-message").text("Congratulations! ヾ( ´ ∀｀ )ﾉ\"");
    $(".admin-message").addClass("slide-in-from-right");
  }, 1500);
});