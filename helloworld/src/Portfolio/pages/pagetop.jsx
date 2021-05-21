// `use strict`;
// import React, { useState } from 'react';
// import Home from './Home'
// const pagetop = () => {
//  const [value, setValue] = useState("");
// import jQuery from 'jquery';

//トップページボタン
let px_change = 1;  // スクロールして何ピクセルでアニメーションさせるか
window.addEventListener('scroll', function (e) {  // スクロールのイベントハンドラを登録
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.scrollingElement.scrollTop;  	// 変化するポイントまでスクロールしたらクラスを追加
	const globalNav = document.getElementById("menubar");

	if (scrollTop > px_change) {
		document.getElementById("btn-backtotop").classList.add("fadein");
		if (scrollTop > globalNav.offsetTop) {
			document.getElementsByTagName("padding-top",this.outerHeight);
			globalNav.classList.add("m_fixed");
	    } else {
			// document.getElementsByTagName("padding-top",this.innerHeight);
			globalNav.classList.remove("m_fixed");

	    }

	} else {
		document.getElementById("btn-backtotop").classList.remove("fadein");  	// 変化するポイント以前であればクラスを削除

	}
})
;



// window.addEventListener('scroll', () => {
    // const globalNav = document.getElementById("menubar");
    // let scrollTop = document.scrollingElement.scrollTop;
  

