$(document).ready(function() {
  $(".loading").addClass("spinner");
  $(".rank-number").addClass("no-viz");
  $(".current-rank-badge").addClass("hide");
  $(".admin-message").html("It is under search&#183;&#183;&#183;");
  
  setTimeout(function() {
    $(".loading").removeClass("spinner");
    $(".rank-number").removeClass("no-viz");
    $(".current-rank-badge").removeClass("hide").addClass("nudge-to-show");
    $(".admin-message").text("Congratulations! ヾ( ´ ∀｀ )ﾉ\"");
    $(".admin-message").addClass("slide-in-from-right");
  }, 1500);
});