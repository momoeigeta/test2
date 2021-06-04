import React from 'react';
const Pagetop = () => {

	//トップページボタン
	let px_change = 1;  // スクロールして何ピクセルでアニメーションさせるか
	window.addEventListener('scroll', function (e) {  // スクロールのイベントハンドラを登録
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;  	// 変化するポイントまでスクロールしたらクラスを追加
		const globalNav = document.getElementById("menubar");

		if (scrollTop > px_change) {
			document.getElementById("btn-backtotop").classList.add("fadein");


			if (scrollTop > 480) {
				document.getElementsByTagName("padding-top", this.outerHeight);
				globalNav.classList.add("m_fixed");
			} else {
				document.getElementsByTagName("padding-top", 0);
				globalNav.classList.remove("m_fixed");
			}


		} else {
			document.getElementById("btn-backtotop").classList.remove("fadein");  	// 変化するポイント以前であればクラスを削除

		}
	});

	return (
		<div />
	)
};
export default Pagetop;
