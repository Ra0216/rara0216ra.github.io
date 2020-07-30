//問題と解答
qa = new Array();
qa[0] = ["みむらの好きな色は？","黄色","虹色","紫色",1];
qa[1] = ["みむらの好きな国は？","シンガポール","トルコ","スイス",2];
qa[2] = ["みむらの好きなポケモンは？","メタモン","ピカチュウ","ギラティナ",3];
qa[3] = ["みむらの好きな季節は？","夏","春","冬",1];
qa[4] = ["みむらの好きなスマブラのキャラは？","しずえ","ベヨネッタ","ソニック",2];
qa[5] = ["みむらの好きなすしネタは？","まぐろ","サーモン","さば",3];
qa[6] = ["みむらの好きなYOUTUBERは？","HIKAKIN","瀬戸弘司","がーどまんチャンネル",2];
qa[7] = ["みむらの好きなゲームは？","麻雀","APEX","どうぶつの森",1];
qa[8] = ["みむらの好きなお菓子は？","雪の宿","じゃがりこ","チョコボール",3];
qa[9] = ["みむらの好きな梅酒の割り方は？","ソーダ","お湯","水",2];


//設定
count = 0; //問題番号
q_sel = 3; //選択肢の数

//最初の問題
quiz();

//問題
function quiz() {
	var s, n;
	
	document.getElementById("text_q").innerHTML = (count + 1) + "問目：" + qa[count][0];
	//選択肢
	s = "";
	for (n=1;n<=q_sel;n++) {
		s += "【<a href='javascript:anser(" + n + ")'>" + n + "：" + qa[count][n] + "</a>】";
	}
	document.getElementById("text_s").innerHTML = s;
}

//解答
function anser(num) {
	var s;
	s = (count + 1) + "問目：";
	//答え合わせ
	if (num == qa[count][q_sel + 1]) {
		//正解
		s += "当たり！ 正解は" + qa[count][num];
	} else {
		s += "違うぞ！やり直してこい！" ;
	}
	document.getElementById("text_a").innerHTML = s;
 //次の問題
	count++;
	if (count < qa.length) {
		quiz();
	} else {
		//終了
		document.getElementById("text_q").innerHTML = "終わりです！";
		document.getElementById("text_s").innerHTML = "お疲れ様でした！";
	}
}
