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
$('.slick-area').slick({
  autoplay: true,
  arrows: false,
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        centerPadding: '70px',
        slidesToShow: 3
      },
    },
    {
      breakpoint: 800,
      settings: {
        centerPadding: '50px',
        slidesToShow: 1
      },
    },
  ],
});

// トップに戻るボタンの表示と非表示
let goToTop = $('#to_top');
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