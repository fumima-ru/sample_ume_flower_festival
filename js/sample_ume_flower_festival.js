$(function() {
  $('.hamburger').click(function() {
    if ($('.hamburger').hasClass('active')) {
      naviClose();
    } else {
      naviOpen();
    }
  });
});

$(function() {
  $('.navi_menu a').click(function() {
    naviClose();
  });
});

// ナビを開く
function naviOpen() {
  $('.hamburger').addClass('active');
  $('#navi').addClass('active');
  $('.ume_petal').addClass('active');
  $('html, body').css({'overflow': 'hidden'});
}

// ナビを閉じる
function naviClose() {
  $('.hamburger').removeClass('active');
  $('#navi').removeClass('active');
  $('.ume_petal').removeClass('active');
  $('html, body').css({'overflow': 'visible'});
}

// スライダー
$(function() {
  $('.slick-area').slick({
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1660,
        settings: {
          centerPadding: '25px',
          slidesToShow: 3
        },
      },
      {
        breakpoint: 1450,
        settings: {
          centerPadding: '25px',
          slidesToShow: 2
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: '25px',
          slidesToShow: 1
        },
      },
      {
        breakpoint: 450,
        settings: {
          centerPadding: '10%',
          slidesToShow: 1
        },
      },
    ],
  });
});

// トップに戻るボタンの表示と非表示
let goToTop = $('#to_top');
goToTop.hide();

if ($(window).width() <= 450) {
    goToTop.hide();
}

$(window).scroll(function() {
  if ($(window).width() > 450) {
    // 画面幅が450pxより大きい場合の処理
    if ($(this).scrollTop() > 400)  {
      goToTop.fadeIn(1000);
    } else {
      goToTop.fadeOut(1000);
    }
  }
});