main();

function main() {
    logDisplay();   // コンソールの表示をHTMLに入れる
    calc();         // 計算
    typeCheck();    // 型
    variable();     // 変数・定数
    condition();    // 条件分岐 if文 switch文
    repetition();   // 繰り返し while文
    arrangement();  // 配列
    extensionFor(); // 拡張for
    multidimensionalArray();// 多次元配列
    exceptionHandling();    // 例外処理 try-catch
}

function logDisplay() {
    console.log = function (log) {
        document.getElementById('console_log').innerHTML += log + "<br>";
    }
}

// 計算
function calc() {
    console.log('');
    console.log('計算');

    console.log('2 + 1 = ' + (2 + 1));  // 足し算
    console.log('2 - 1 = ' + (2 - 1));  // 引き算
    console.log('2 × 2 = ' + (2 * 2));  // 掛け算
    console.log('2 ÷ 1 = ' + (2 / 1));  // 割り算
    console.log('3 ÷ 2 = ' + (3 / 2 | 0) + '余り' + (3 % 2)); // 余り
}

// 型
function typeCheck() {
    console.log('');
    console.log('型');

    // typeofで型をチェックする。
    console.log(typeof 42);         // expected output: 'number'
    console.log(typeof 'blubber');  // expected output: 'string'
    console.log(typeof true);       // expected output: 'boolean'
}    

// 変数・定数
function variable() {
    console.log('');
    console.log('変数・定数');

    var a = 'test';     // 再代入可
    let b = 'test';     // 再代入可
    const c = 'test';   // 再代入不可

    console.log('var ' + a);
    console.log('let ' + b);
    console.log('const ' + c);

    // c = 'hoge';      //再代入したのでエラー

    if(true) {
        //ブロックの中で宣言
        var d = 1;
        let e = 1;
        const f = 2;
    }
    
    console.log(d)
    // console.log(e)   //ブロックの外側なのでundefined(未定義)となる なのでエラー
    // console.log(f)   //constを使った場合も同様にundefinedとなる エラー

    // 基本的にconstを使うといいよ
}

// 条件分岐 if文 switch文
function condition() {
    console.log('');
    console.log('条件分岐 if文 switch文');

    const num = 70;

    // if文
    console.log('if文');
    if(num > 80) {
        console.log('numは80より大きいです。');
    }else if(num < 80) {
        console.log('numは80より小さいです。')
    }else {
        console.log('その他');
    }

    // switch文
    console.log('switch文');
    switch(num) {
        case 70:
            console.log('numは70です');
            break;
        default:
            console.log('デフォルトで実行されます');
            break;
    }
}

// 繰り返し while文 for文
function repetition() {
    console.log('');
    console.log('繰り返し while文 for文')

    let i = 0;

    console.log('while文');
    while(i != 10) {
        i++;
        console.log(i);
    }

    i = 0;
    
    console.log('for文');
    for(i; i <= 10; i++) {
        console.log(i)
    }
}

// 配列
function arrangement() {
    console.log('');
    console.log('配列');

    const fuga = ['hoge', 'piyo'];

    console.log(fuga.length);           // 配列の長さ
    console.log(fuga[fuga.length - 1]); // 配列の最後
}

// 拡張for
function extensionFor() {
    console.log('');
    console.log('拡張for');

    const pref = ["北海道", "東京都", "神奈川県"];

    for (var i in pref) {
        console.log(i + ':' + pref[i]);
    }
}

// 多次元配列
function multidimensionalArray() {
    console.log('');
    console.log('多次元配列');

    const data = [
        ['0-0', '0-1', '0-2'],
        ['1-0', '1-1', '1-2'],
        ['2-0', '2-1', '2-2']
    ];

    console.log(data[0][1]);
}

// 例外処理 try-catch
function exceptionHandling() {
    console.log('');
    console.log('例外処理 try-catch');

    try {
        const result = 100 * num;
        console.log(result);
    } catch(e) {
        console.log(e.message);
    }
}

// 静的メソッド
// 動的メソッド
// 抽象クラス・抽象メソッド
// 例外処理(throw・throws)
// ソート
