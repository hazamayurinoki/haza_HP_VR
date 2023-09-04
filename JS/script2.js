'use strict'

$(function () {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      dots: false,
      arrows:false,
      pauseOnFocus: false,//フォーカスで一時停止を無効
      pauseOnHover: false,//マウスホバーで一時停止を無効
    });
  })


$(".openbtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});



$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


/* グローバルメニューの可変
$(".openbtn").click(function () {//ボタンのリンクがクリックされたら
  $("this").css({
    "background": "linear-gradient(to right,#009944,#0068b7,#1d2088,#920783) 0 / 200%
    });
}); */

/* animation: 0.5s openbtn linear infinite;  */