/*$(document).ready(function() {
    $('.tabs__button').on('click', function() {
        addActiveClass($(this));
        showContent($(this));
    });
    $('.tabs__button_2').on('click', function() {
        addActiveClass($(this));
        showContent($(this));
    });
    $('.tabs__button_3').on('click', function() {
        addActiveClass($(this));
        showContent($(this));
    });
});

function addActiveClass($el) {
    $el.addClass('active').siblings().removeClass('active');
}

function showContent($el) {
    var index = $el.index();

    $('.content-block__item').eq(index).addClass('is-shown').siblings().removeClass('is-shown');
}*/

(function() {
    var Tabs = {
        addActiveClass: function($el) {
            $el.addClass('active').siblings().removeClass('active');
        },

        showContent: function($el) {
            var index = $el.index();

            $('.content-block__item').eq(index).addClass('is-shown').siblings().removeClass('is-shown');
        },

        init: function() {
            $('.tabs__button').on('click', function() {
                Tabs.addActiveClass($(this));
                Tabs.showContent($(this));
            });
            $('.tabs__button-2').on('click', function() {
                Tabs.addActiveClass($(this));
                Tabs.showContent($(this));
            });
            $('.tabs__button-3').on('click', function() {
                Tabs.addActiveClass($(this));
                Tabs.showContent($(this));
            });
        }
    };
    Tabs.init();
})();