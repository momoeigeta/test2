`use strict`;

let px_change = 1;  // スクロールして何ピクセルでアニメーションさせるか
window.addEventListener('scroll', function(e) {  // スクロールのイベントハンドラを登録
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;  	// 変化するポイントまでスクロールしたらクラスを追加
	if ( scrollTop > px_change ) {
		document.getElementById( "btn-backtotop" ).classList.add( "fadein" );
	} else {
		document.getElementById( "btn-backtotop" ).classList.remove( "fadein" );  	// 変化するポイント以前であればクラスを削除
	}
});
 

//文字数制限
const test = document.getElementById("test");
const validation = document.getElementById('validation');
const check =() => {
	const value = test.value.replace(/\n/g, "") /*すべての改行コードが空文字に変わり、文字数としてカウントされなくなる。*/
	if (value.length < 5) {
		alert("5文字以上入力してください。")
	}
	else {
		return true;
	}
};


var navPos = jQuery( '#menubar' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#menubar' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
  if ( jQuery( this ).scrollTop() > navPos ) {
    jQuery( 'body' ).css( 'padding-top', navHeight );
    jQuery( '#menubar' ).addClass( 'm_fixed' );
  } else {
    jQuery( 'body' ).css( 'padding-top', 0 );
    jQuery( '#menubar' ).removeClass( 'm_fixed' );
  }
});