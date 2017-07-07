$(document).ready(function() {
  $("a.scroll").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
    
  $("a.menuButton").click(function(e){
     e.preventDefault();
     $("#responsive").toggleClass('displayflex'); 
  });
});