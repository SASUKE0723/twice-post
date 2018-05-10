//video要素の取得
  var video = document.getElementById('video');
  //videoボタンの取得
  var video_btn = document.getElementById('video-btn');
  //状態保存
  var btn_status = 0;

  //画面クリックで再生・ポーズ
  video_btn.addEventListener('click', function () {
    if(btn_status === 0) {
      video.play();
      btn_status = 1;
    }else {
      video.pause();
      btn_status = 0;
    }
  });
  
  //■page topボタン

$(function(){
var topBtn=$('#pageTop');
topBtn.hide();

 

//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>80){

    //---- 画面を80pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();

  }else{

    //---- 画面が80pxより上なら、ボタンを表示しない
    topBtn.fadeOut();

  } 
});

 

// ◇ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;

});


});

