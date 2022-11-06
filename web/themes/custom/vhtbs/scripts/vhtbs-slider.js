(function ($, Drupal) {
  'use strict';

  function init() {
    function run() {
      if (jQuery('.carousel').length !== 1) {
        return false;
      }
      jQuery('.carousel .playlist').slick({
        dots: true,
        infinite: true,
        lazyLoad: 'ondemand',
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        mobileFirst: true,
        nextArrow: '<div class="chevron-container slick-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></span><span class="sr-only">Next</span></div>',
        prevArrow: '<div class="chevron-container"><i class="fa fa-chevron-left" aria-hidden="true"></i></span><span class="sr-only">Previous</span></div>',    
      });
    }
    run();
  }
  
  $(document).ready(init);
})(jQuery, Drupal);