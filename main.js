main();

function main() {
    logDisplay();   // コンソールの表示をHTMLに入れる
    variable();     // 変数・定数
    dataType();     // データ型
    cast();         // 型変換 キャスト
    operator();     // 演算子
    comparison();   // 比較
    conditionalBrancIf();       // 条件分岐 if
    conditionalBrancSwitch();   // 条件分岐 switch
    logicalOperator();          // 論理演算子
    nullCoalescingOperator();   // null合体演算子
    repetition();   // 繰り返し
    functions();    // 関数
    functionExpression();       // 関数式
    arrowFunction();// アロー関数
}


// -------------------------------------------------------


// コンソールをhtmlのdivへ
function logDisplay() {
    console.log = function (log) {
        document.getElementById('main').innerHTML += log + "<br>";
    }
}


// -------------------------------------------------------


// 変数・定数
function variable() {
    // school.jsに書いた。
    const a = 'test';
    let b = 'test';
    var c = 'test';
}


// -------------------------------------------------------


// データ型
function dataType() {
    console.log('');
    console.log('<span>データ型</span>');

    // 数値
    let n = 123;
    // 計算して表示
    console.log('数値 -> ' + n + 377);

console.log('------------------');

    // BigInt
    // 9007199254740991以上の数値
    const bigInt = 1234567890123456789012345678901234567890n;
    console.log('BigInt -> ' + bigInt);

console.log('------------------');

    // 文字列
    let name = "name";
    // 変数表示
    console.log('文字列 -> ' + `Hello, ${name}`);

console.log('------------------');

    // boolean(論理型)
    // boolean型は2つの値だけを持つことができる true と false
    let check = true;
    console.log('bool値 -> ' + check);

console.log('------------------');

    // "null" 値
    // 空な値を入れることができる
    let age = null;
    console.log('null値 -> ' + age);

console.log('------------------');

    // "undefined" 値
    let x;
    console.log('undefined値 -> ' + x);
}


// -------------------------------------------------------


// 型変換 キャスト
function cast() {
    console.log('');
    console.log('<span>型変換 キャスト</span>');

    let kazu = "123"
    
    // 文字としての数字
    console.log('変数kazuは文字です ' + kazu);
    console.log(typeof kazu);

    // 文字としての数字を数字としての数字に変更する
    console.log('変数kazuを数字に変更します ' + kazu);
    console.log(typeof Number(kazu));

console.log('------------------');

    let bool = 1;

    console.log('変数boolは' + bool + 'です');
    
    // 1はtrue 0はfalse
    // Booleanに変更します
    console.log('Booleanに変更します');
    console.log(Boolean(bool));

    // その他キャストできる型
    // Number（数値型）
    // String（文字列型）
    // Boolean（真偽型）
    // NullI(値が入ってない状態)
    // Undefined（値が定義されてない状態）
}


// -------------------------------------------------------


// 演算子
function operator() {
    // school.jsに書いた。

    let a = 1;
    let b = 1;

    c = a + b;
}


// -------------------------------------------------------


// 比較
function comparison() {
    console.log('');
    console.log('<span>比較</span>');

    // より大きい true (正しい)
    console.log('2 > 1 -> ' + (2 > 1));
    
    // より小さい true (正しい)
    console.log('2 < 1 -> ' + (2 < 1));

    // 以上 true (正しい)
    console.log('2 >= 1 -> ' + (2 >= 1));

    // 以下 true (正しい)
    console.log('2 <= 1 -> ' + (2 <= 1));
    
    // 等しい false (誤り)
    console.log('2 == 1 -> ' + (2 == 1));
    
    // 等しくない true (正しい)
    console.log('2 != 1 -> ' + (2 != 1));
}


// -------------------------------------------------------


// 条件分岐 if
function conditionalBrancIf() {
    console.log('');
    console.log('<span>条件分岐 if</span>');

    let bool = 0;
    let mozi = "asd";

    console.log('bool is ' + bool);
    console.log('mozi is ' + mozi);

    // 文字があるか
    if(mozi) {
        console.log('変数moziは1文字以上あります。');
    }else {
        console.log('変数moziは空です');
    }

console.log('------------------');

    // if文は括弧の中の式を評価し、Boolean型に変換します。
    if(bool) {
        // true
        console.log('boolは真です。');
    }else if(!bool) {
        // false
        console.log('boolは偽です。');
    }

console.log('------------------');

    let age = 14; // 年齢

    console.log('age is ' + age);

    // 三項演算子
    let hoge = (age >= 18) ? console.log('18歳以上です') : console.log('18歳未満です');

    hoge = (age >= 18) ? true : false;

    // ?複数
    hoge ? console.log('18歳以上です') :
    bool ? console.log('18未満でboolがtrueです') : console.log('18未満でboolがfalseです');
}


// -------------------------------------------------------


// 条件分岐 switch
function conditionalBrancSwitch() {
    console.log('');
    console.log('<span>条件分岐 switch</span>');

    let arg = 1;

    console.log('arg is ' + arg);

    switch (arg) {
        case 0:
        case 1:
            console.log('0か1やで');
            break;
        case 2:
            console.log('2やで');
            break;
        case 3:
            console.log('3やで');
            break;
        default:
            console.log('どれにも当てはまらない')
    }
}


// -------------------------------------------------------


// 論理演算子
function logicalOperator() {
    console.log('');
    console.log('<span>論理演算子</span>');

    const a = true;
    const b = false;

    console.log('a is ' + a);
    console.log('b is ' + b);

console.log('------------------');

    // OR文
    console.log('aかbがtrueなら true -> ' + (a || b));

console.log('------------------');

    // AND文
    console.log('aとbがtrueなら true -> ' + (a && b));

console.log('------------------');

    // NOT文
    console.log('trueなら false -> ' + (!a))
}


// -------------------------------------------------------


// null合体演算子
function nullCoalescingOperator() {
    console.log('');
    console.log('<span>null合体演算子</span>');

    let a;
    let b = "test";

    console.log('a is ' + a);
    console.log('b is ' + b);
    
    console.log(a ?? "default");
    console.log(b ?? "default");
}


// -------------------------------------------------------


// 繰り返し
function repetition() {
    console.log('');
    console.log('<span>繰り返し</span>');

    // while文
    console.log('while文');
    let i = 0;
    while (i < 3) {
        i++;
        console.log(i);
    }
    
console.log('------------------');

    // do while文
    console.log('do while文');
    i = 0;
    do {
        i++;
        console.log( i );
    } while (i < 3);
    
console.log('------------------');

    // for文
    console.log('for文');
    for (i = 1; i <= 3; i++) {
        console.log(i);
    }

console.log('------------------');

    // for文省略・break
    console.log('for文 省略');
    i = 1;
    for (; i <= 3; i++) {
        console.log(i);
        if(i == 2) break; //breakでループ終了
    }

console.log('------------------');
    
    // イテレーション
    console.log('イテレーション');
    for (let i = 0; i < 10; i++) {
        // true の場合、本体の残りのパートをスキップ
        if (i % 2 == 0) continue;
        console.log(i);
    }
}


// -------------------------------------------------------


// 関数
function functions() {
    console.log('');
    console.log('<span>関数</span>');

    // 関数のみ
    function test() {
        console.log('hello function');
    }

    test();
    test();

console.log('------------------');

    // ローカル変数
    function showMessage() {
        let message = "Hello, I'm JavaScript!"; // ローカル変数
        console.log(message);
    }

    showMessage();
    // console.log(message); // エラー

console.log('------------------');

    // 外部変数
    let userName = 'John';

    function todokeMessage() {
        let message = 'Hello, ' + userName;
        console.log(message);
    }

    todokeMessage();

console.log('------------------');

    // 引数
    function parameter(hoge, fuga) {
        console.log('hoge is ' + hoge);
        console.log('fuga is ' + fuga);
        console.log('文字連結 ' + (hoge + fuga));
    } 

    parameter('hogehoge', 'fugafuga');
    parameter('fugafuga', 'hogehoge');

console.log('------------------');

    // デフォルト値
    function defaultFunc(hoge, fuga = 'default') {
        console.log('hoge + fuga = ' + (hoge + fuga));
    }

    defaultFunc('hoge');
    defaultFunc('hoge', 'fuga');

console.log('------------------');

    function returnOfValue() {
        return 123;
    }

    console.log(returnOfValue());

    function sum(a, b) {
        const num = a + b;
        return num;
    }

    console.log('10 + 11 = ' + sum(10, 11));

console.log('------------------');

    function getAge(){
        return 18;
    }

    console.log(getAge());

    // showMessage(..)     // メッセージを表示します
    // getAge(..)          // 年齢を返します(なんとかしてその値を得る)
    // calcSum(..)         // 合計を計算し、それを返します
    // createForm(..)      // フォームを生成します(通常それを返却します)
    // checkPermission(..) // 権限をチェックし、true/false を返します

}


// -------------------------------------------------------


// 関数式
function functionExpression() {
    console.log('');
    console.log('<span>関数式</span>');

    // 関数宣言
    function sayHi_1() {
        console.log("Hello_sayHi_1");
    }
    sayHi_1();

    // 関数式
    let sayHi_2 = function() {
        console.log("Hello_sayHi_2");
    };
    sayHi_2();

console.log('------------------');

    function sayHi_3() {
        return "Hello_sayHi_3";
    }

    const say_3 = sayHi_3();
    console.log(say_3);

}


// アロー関数
function arrowFunction() {
    console.log('');
    console.log('<span>関数式</span>');

    let sum = (a, b) => a + b;

    /* アロー関数は次よりも短い形式です:

    let sum = function(a, b) {
        return a + b;
    };
    */

    console.log(sum(1, 2));

console.log('------------------');

    let calcsum = (a, b) => {  // 波括弧を使って複数行の関数を書けます
        let result = a + b;
        return result; // 波括弧を使う場合、明示的な return が必要です
    };

    console.log(calcsum(1, 2));
}
