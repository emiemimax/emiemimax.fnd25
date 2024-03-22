'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let word = ["true", "false", "element", "document", "function", "console", "return", "answer", "let", "const", "greeting", "add" ,"expected", "actual", "length", "temperature", "undefined", "object", "result", "boolean"]; //問題文
let randomQ = Math.floor(Math.random() * word.length); //ランダムで問題を表示
let answer = 0; //回答の初期値
let answerLength = word[randomQ].length; //文字の長さ
let countQ = 0; //解いた問題のカウント
let startTime, endTime; // 開始時刻と終了時刻を記録する変数

document.getElementById("startButton").addEventListener("click",push_Button); //ゲーム開始時にボタンをクリック

function push_Button(event) {
    document.getElementById("title").style.display = "block"; // h1要素を表示する
    startTime = new Date(); // 開始時刻を記録
    document.getElementById("Qimg").src = word[randomQ] + ".JPG";
    document.getElementById("typing").innerHTML = word[randomQ].substring(answer, answerLength); // 問題を表示
    document.getElementById("startButton").style.display = "none"; // ゲーム開始ボタンを非表示にする
    window.addEventListener("keydown", check); //keydownされたときにcheckを実行する
    countQ = 1;
    updateQuestionCount(); // 問題のカウント数を1から更新して表示
  }
function updateQuestionCount() {
    document.getElementById("questionCount").innerHTML = countQ + " 問目";
}
function check(event) {
  let keyCode = event.key; // キーコードを取得
  if (word[randomQ].charAt(answer) === keyCode) { // 押したキーが合っていたら
    answer++; // 判定する文章に１足す
    document.getElementById("Qimg").src = word[randomQ] + ".JPG";
    document.getElementById("typing").innerHTML = word[randomQ].substring(answer, answerLength); // 問題を表示
    if (answer === answerLength) { // 全部正解したら
      countQ++; // 問題のカウントを増やす
      updateQuestionCount(); // 問題のカウント数を更新して表示
      if (countQ === 3) { // 10問解いたら
        endTime = new Date(); // 終了時刻を記録
        let elapsedTime = (endTime - startTime) / 1000; // 経過時間を秒に変換
        document.getElementById("title").style.display = "none"; //h1を非表示にする
        document.getElementById("Qimg").style.display = "none"; // 画像を非表示にする
        document.getElementById("questionCount").style.display = "none"; //問題数を非表示にする
        document.getElementById("finish").innerHTML = "finish!!!!!";
        document.getElementById("time").innerHTML = "経過時間: " + elapsedTime.toFixed(2) + "秒"; // ゲーム終了メッセージを表示
        document.body.classList.add("finish-background"); //最後の画面の要素指定するための1行
        window.removeEventListener("keydown", check); // イベントリスナーを削除してゲームを終了
      } else {
        randomQ = Math.floor(Math.random() * word.length); // 問題をランダムで出題する
        answer = 0; // 回答初期値
        answerLength = word[randomQ].length; // 計算用の文字の長さ
        document.getElementById("typing").innerHTML = word[randomQ].substring(answer, answerLength); // 新たな問題を表示
        document.getElementById("Qimg").src = word[randomQ] + ".JPG";
      }
    }
  }
}
