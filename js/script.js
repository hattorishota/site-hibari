
$(function () {

  //ページ内スクロール
  $('a[href^="#"]').on('click', function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  // Q&Aアコーディオン
  $('.accordion_one .ac_header').click(function(){
    $(this).next('.ac_inner').slideToggle();
    $(this).toggleClass("open");
  });

  //Inview
  $('.fadein').on('inview', function (event, isInView) {
    // 要素が画面に表示された時に実行する処理を記述
    $(this).addClass('scrollin');
  });

  // ハンバーガーチェック判定
  $('.hamburger-menu').click(function(){
    if($('[name="humburger"]').prop('checked')){
      $('body').toggleClass('fixed')
      $('.header-logo').toggleClass('i-1')
    }
  });

});

var mySwiper = new Swiper(".swiper-container", {
  loop: true, //ループさせる
  effect: "fade", //フェードのエフェクト
  autoplay: {
    delay: 4000, //４秒後に次の画像へ
    disableOnInteraction: false //ユーザー操作後に自動再生を再開する
  },
  speed: 2000, //２秒かけながら次の画像へ移動
  allowTouchMove: false, //マウスでのスワイプを禁止
  navigation: { //左右のページ送りを有効にする
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: { //円形のページネーションを有効にする
    el: ".swiper-pagination",
    clickable: true //クリックを有効にする
  }
});