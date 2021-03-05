@@include('webpCheck.js')
$(document).ready(function () {

  $('img.img-svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

  // Slider
  $('.slider-rec').slick({
    initialSlide: 1,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 450,
    touchThreshold: 12,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          touchThreshold: 6,
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider-sofaCafe').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 450,
    touchThreshold: 12,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          touchThreshold: 6,
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider-sofaRestaurant').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 450,
    touchThreshold: 12,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          touchThreshold: 6,
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider-props').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 450,
    touchThreshold: 12,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          touchThreshold: 6,
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider-armchairs').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 450,
    touchThreshold: 12,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          touchThreshold: 6,
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider-reviews').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 450,
    touchThreshold: 12,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          touchThreshold: 6,
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  // toTop
  var $toTop = $('.toTop');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $toTop.addClass('show');
    } else {
      $toTop.removeClass('show');
    }
  });

  $toTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  // Mobile Menus
  $('.btn-MenuAnswers').on("click", function () {
    $('.mobile-menuAnswers .nav-answers').css('display', 'block');
    $(document).mouseup(function (e) {
      var nav = $(".nav-answers"); // тут указываем ID элемента
      if (!nav.is(e.target) // если клик был не по нашему блоку
        && nav.has(e.target).length === 0) { // и не по его дочерним элементам
        nav.css('display', 'none'); // скрываем его
      }
    })
  })

  $('.btn-openCatalog').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('opened');
    $('.catalog-menu').slideToggle(0);
    $(document).mouseup(function (e) {
      var menu = $(".catalog-menu");
      var btn = $('.btn-openCatalog');
      if (!menu.is(e.target)
        && menu.has(e.target).length === 0 && !btn.is(e.target)) {
        $('.catalog-menu').slideUp(0);
        $('.btn-openCatalog').removeClass('opened');
      }
    })
  });

  $('.btn-openNav').on("click", function () {
    if (!$(this).hasClass('opened')) {
      $(this).addClass('opened');
      $(this).next('.nav-sublist').css('display', 'block');
    } else {
      $(this).next('.nav-sublist').css('display', 'none');
      $('.btn-openNav').removeClass('opened');
    }
  })
});
