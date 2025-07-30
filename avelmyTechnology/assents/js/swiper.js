   var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.prev',
        prevEl: '.next',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }