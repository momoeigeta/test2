// スクロールして何ピクセルでアニメーションさせるか
let px_change = 1;
// スクロールのイベントハンドラを登録
window.addEventListener('scroll', function(e) {
	// 変化するポイントまでスクロールしたらクラスを追加
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if ( scrollTop > px_change ) {
		document.getElementById( "btn-backtotop" ).classList.add( "fadein" );
 
	// 変化するポイント以前であればクラスを削除
	} else {
		document.getElementById( "btn-backtotop" ).classList.remove( "fadein" );
	}
});
 

//文字数制限
const test = document.getElementById("test");
const validation = document.getElementById('validation');
function check() {
	const value = test.value.replace(/\n/g, "") /*すべての改行コードが空文字に変わり、文字数としてカウントされなくなる。*/
	if (value.length < 5) {
		alert("5文字以上入力してください。")
	}
	else {
		validation.innerText = ""
	};
};