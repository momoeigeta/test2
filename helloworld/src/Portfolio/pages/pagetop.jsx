// `use strict`;
// import React, { useState } from 'react';
// import Home from './Home'
// const pagetop = () => {
//  const [value, setValue] = useState("");

//トップページボタン
let px_change = 1;  // スクロールして何ピクセルでアニメーションさせるか
window.addEventListener('scroll', function (e) {  // スクロールのイベントハンドラを登録
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;  	// 変化するポイントまでスクロールしたらクラスを追加
	if (scrollTop > px_change) {
		document.getElementById("btn-backtotop").classList.add("fadein");
	} else {
		document.getElementById("btn-backtotop").classList.remove("fadein");  	// 変化するポイント以前であればクラスを削除
	}
})
;

//文字数制限
const test = document.getElementById("test");
// const validation = document.getElementById('validation');
const check =() => {
	const value = test.value.replace(/\n/g, "") /*すべての改行コードが空文字に変わり、文字数としてカウントされなくなる。*/
	if (value.length < 5) {
		<div onclick = {check}>
			alert ("5文字以上入力してください。")</div>
	}
	else {
		return true;
	}
};



// export default pagetop;

//メニューバー固定

// let menubar = document.getElementById("menubar");
// let body = document.getElementsByClassName("body");
// // let navPos = menubar.offset(1).top; // グローバルメニューの位置
// // let navHeight = menubar.outerHeight; // グローバルメニューの高さ

// // let menubarBottom = menubar[0].getBoundingClientRect().bottom;
// const [fixed, setfixed] = useState(false);

// const handlescroll = () => {
//     setfixed(true);
//   };
//   const handlescrolltop = () => {
//     setfixed(false);
//   };


// <div>
// onscroll={handlescroll}
// scrollTop={handlescrolltop}
// </div>
// // let navPos = menubar.offset().top; // グローバルメニューの位置
// // let navHeight = ("#menubar").outerHeight(); // グローバルメニューの高さ
// // $( window ).on( 'scroll', function() {
// //   if ( $( this ).scrollTop() > navPos ) {
// //     $( 'body' ).css( 'padding-top', navHeight );
// //     $( '#menubar' ).addClass( 'm_fixed' );
// //   } else {
// //     $( 'body' ).css( 'padding-top', 0 );
// //     $( '#menubar' ).removeClass( 'm_fixed' );
// //   }
// // });

