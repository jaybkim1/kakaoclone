$(document).ready(function(){
  // whatever
  var $actionBtn = $("#actionBtn"),
      $iconBtn = $("#actionBtn .fa"),
      $lockBtn = $("#lockBtn"),
      $timesBtn = $("#timeBtn");

  $actionBtn.click(function(){
      $iconBtn.toggleClass("fa-times fa-comment");
      $lockBtn.toggleClass("showing-button");
      $timesBtn.toggleClass("showing-button");
  });
});
