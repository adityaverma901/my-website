
$(document).ready(function(){
    $('.feature-text').hover(function(){
      var newImage = $(this).data('image');
      $('#main-image').attr('src', newImage);
      $('.feature-text').removeClass('active-feature');
      $(this).addClass('active-feature');
    });
  });
  $(document).ready(function(){
    $('#contact-button').on('click', function(){
        $('#image-container').hide();
        $('#text-container').hide();
        $('#contact-form-container').show();
    });
});
  
  