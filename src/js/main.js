$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  $('input[type="file"], select').styler();

  var mixer = mixitup('.products__inner',{
   load: {
     filter: '.category-drinks, .category-bake, .category-dishes'
   }
  });

});