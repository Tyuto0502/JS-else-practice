/*
・elseを使用する時の注意点：
　　elseはifを使用した際にifの条件にあわなかった時の処理を実行するため、
　　ifとセットで使用する必要がある。elseのみで使用することはできない。
　　また、ifとelseの間いに他の処理を記載するとエラーが表示されるため
　　ifとelseはひとまとまりに考えた方がいい。s

・JavaScriptで実装した時の確認ポイント：
　　実際に記載したプログラムが動いているかどうかだけではなく、
　　コンソール側でエラーが表示されてないか確認する必要がある。
*/

var num = 100;
if (num === 123) {
  console.log("一致");
  console.log(num);
} else {
  console.log("不一致");
  console.log(num);
};

var text = "practice";
if (text === "practice-2") {
  console.log("条件一致");
  console.log(text);
} else {
  console.log("条件不一致");
  console.log(text);
}


