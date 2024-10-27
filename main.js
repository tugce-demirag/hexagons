
$(".showfilters").on("click", function () {
  
    // check what is currently happening
    if ($(".filters-list").is(":visible")) {
      // if filters are hidden, show them and change text
      $(".filters-list").slideUp()
      $(".showfilters").text("Show Filters")
    } else {
      // if filters are shown, hide them and change text
      $(".filters-list").slideDown()
      $(".showfilters").text("Hide Filters")
    } 
    return false
    // this will block the default behaviour href jumping to the top of the page because of "#"
  })
  //remove all the selected classes from our filters
  
  
  $(".filters-list a").on("click",function(){
    var filter = $(this).attr("data-filter")
    console.log(filter)
    //hide all the products
    //show the products with a particular filter
    $(".product").hide()
    $(filter).show()
    
    $(".filters-list a").removeClass("selected")
      // this will add a class name to clicked one
      $(this).addClass("selected")
    return false
  })
  