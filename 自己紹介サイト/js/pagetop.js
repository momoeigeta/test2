`use strict`;

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

//メニューバー固定
let navPos = jQuery( '#menubar' ).offset().top; // グローバルメニューの位置
let navHeight = jQuery( '#menubar' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
  if ( jQuery( this ).scrollTop() > navPos ) {
    jQuery( 'body' ).css( 'padding-top', navHeight );
    jQuery( '#menubar' ).addClass( 'm_fixed' );
  } else {
    jQuery( 'body' ).css( 'padding-top', 0 );
    jQuery( '#menubar' ).removeClass( 'm_fixed' );
  }
});


//canvas要素の取得
let canvas = document.getElementById('canvas'); //canvasを取得
let ctx = canvas.getContext('2d'); //canvasのコンテキストを取得

//canvasサイズの設定
let wd_width = window.innerWidth; //ウィンドウ幅をキャンバス幅に。
let wd_height = window.innerHeight; //ウィンドウ高をキャンバス高に。

ctx.canvas.width = wd_width;
ctx.canvas.height = wd_height;

//ループ処理「requestAnimFrame」のベンダープレフィクス
let animFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

//canvasサイズを可変にする
const canvas_resize =() => {
  let rswd_width = window.innerWidth;
  let rswd_height = window.innerHeight;

  canvas.setAttribute('width', rswd_width);
  canvas.setAttribute('height', rswd_height);
}

//乱数
//min から max までの乱整数を返す関数
//Math.round() を用いると、非一様分布になる
const getRandomInt =(min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//雪の設定

// 雪の粒を保存する配列
const snows = [];

// 雪の粒の初期位置とサイズの設定
class snow {
	constructor() {
		this.position_x = getRandomInt(0, wd_width);
		this.position_y = getRandomInt(0, wd_height);
		this.snow_size = getRandomInt(1, 4);
		this.speed = getRandomInt(1, 3); //落下速度
		this.wind = getRandomInt(0, 0.5); //横風の強さ
	}
// 雪の粒の描画
draw() {
	let snow_grad = ctx.createRadialGradient(
		this.position_x,
		this.position_y,
		this.snow_size * 0.6,
		this.position_x,
		this.position_y,
		this.snow_size
	);
		/* グラデーション終点のオフセットと色をセット */
		snow_grad.addColorStop(0, 'rgba(225, 225, 225, 0.8)');
		snow_grad.addColorStop(0.5, 'rgba(225, 225, 225, 0.2)');
		snow_grad.addColorStop(1, 'rgba(225, 225, 225, 0.1)');
		ctx.beginPath();
		ctx.fillStyle = snow_grad; // グラデーションをfillStyleプロパティにセット
		ctx.arc(this.position_x, this.position_y, this.snow_size, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
	}
	// 雪の粒の移動
	move() {
		this.position_x += this.wind + Math.sin(this.position_y / 20) * 0.3;
		this.position_y += this.speed;

		if (this.position_y > ctx.canvas.height) {
			this.position_y = 0;
			this.position_x = getRandomInt(0, wd_width);
		}
	}
}


// 雪の粒の密度(雪の量)
const snow_density =(snow_count) => {
  for (let num = 0; num < snow_count; num++) {
    snows[num] = new snow();
  }
}



//雪を降らす処理

//雪の粒を描画する
const snow_draw =() => {
  ctx.clearRect(0, 0, wd_width, wd_height);
  for (let num = 0; num < snows.length; num++) {
    snows[num].draw();
  }
}

//雪の粒の座標を更新する
const snow_move =() => {
  for (let num = 0; num < snows.length; num++) {
    snows[num].move();
  }
}

//ループ処理
const snowy =() => {
  snow_draw();
  snow_move();
  animFrame(snowy);
}

snow_density(90); //雪の量の指定
snowy();