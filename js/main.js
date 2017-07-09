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
    
    // SELECT
    // Code to convert select to UL
    $('.select').each(function() {
      var $select = $(this).find('select'),
        $list = $('<ul />');
      $select.find('option').each(function() {
        $list.append('<li>' + $(this).text() + '</li>');
      });
      //Remove the select after the values are taken
      $select.after($list).remove();


      //Append Default text to show the selected
      $(this).append('<span>select</span>')
      var firsttxt = $(this).find('li:first-child').text();
      $(this).find('span').text(firsttxt)

      // On click show the UL
      $(this).on('click', 'span', function(e) {
        e.stopPropagation();
        $(this).parent().find('ul').show();
      });

      // On select of list select the item
      $(this).on('click', 'li', function() {
        var gettext = $(this).text();
        $(this).parents('.select').find('span').text(gettext);
        $(this).parent().fadeOut();
      });

    })

    $('.select span, .select ul li').click(function(e){
        e.preventDefault();
        $(".select").toggleClass('select2');
    });    

    // On click out hide the UL
    $(document).on('click', function() {
      $('.select ul').fadeOut();
    });
});