// `use strict`;
// import React, { useState } from 'react';


// const pagetop = () => {
//  const [value, setValue] = useState("");


//トップページボタン
let px_change = 1;  // スクロールして何ピクセルでアニメーションさせるか
window.addEventListener('scroll', function(e) {  // スクロールのイベントハンドラを登録
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;  	// 変化するポイントまでスクロールしたらクラスを追加
	if ( scrollTop > px_change ) {
		document.getElementById( "btn-backtotop" ).classList.add( "fadein" );
	} else {
		document.getElementById( "btn-backtotop" ).classList.remove( "fadein" );  	// 変化するポイント以前であればクラスを削除
	}
});




