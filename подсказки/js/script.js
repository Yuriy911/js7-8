$(document).ready(function() {

  var $inputField = $('.input-field');
  $inputField.on('mouseenter', function() {
    showTooltip($(this));
  });

  $inputField.on('mouseleave', function() {
    hideTooltip($(this));
  });
});


function showTooltip($el) {
  var tooltipText = $el.attr('data-title');

  $el.after('<div class="tooltip">'+tooltipText+'</div>').next('.tooltip').fadeIn(300);
}

function hideTooltip($el) {
  $el.next('.tooltip').fadeOut(300, removeTooltip);

  function removeTooltip() {
    $(this).remove();
  }
}

//(function() {
//    var Tabs = {
//        addActiveClass: function($el) {
//            $el.addClass('active').siblings().removeClass('active');
//        },
//
//        showContent: function($el) {
//            var index = $el.index();
//
//            $('.content-block__item').eq(index).addClass('is-shown').siblings().removeClass('is-shown');
//        },
//
//        init: function() {
//            $('.tabs__button').on('click', function() {
//                Tabs.addActiveClass($(this));
//                Tabs.showContent($(this));
//            });
//        }
//    };
//    Tabs.init();
//})();