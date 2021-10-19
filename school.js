main();

function main() {
    logDisplay();   // コンソールの表示をHTMLに入れる
    calc();         // 計算
    dataType();    // データ型
    variable();     // 変数・定数
    condition();    // 条件分岐 if文 switch文
    repetition();   // 繰り返し while文
    arrangement();  // 配列
    extensionFor(); // 拡張for
    multidimensionalArray();// 多次元配列
    exceptionHandling();    // 例外処理 try-catch
    methods();      // メソッド・引数
    bubble();       // ソート(バブルソート)
}


// コンソールをhtmlのdivへ
function logDisplay() {
    console.log = function (log) {
        document.getElementById('school').innerHTML += log + "<br>";
    }
}


// 計算
function calc() {
    console.log('');
    console.log('<span>計算</span>');

    console.log('2 + 1 = ' + (2 + 1));  // 足し算
    console.log('2 - 1 = ' + (2 - 1));  // 引き算
    console.log('2 × 2 = ' + (2 * 2));  // 掛け算
    console.log('2 ÷ 1 = ' + (2 / 1));  // 割り算
    console.log('3 ÷ 2 = ' + (3 / 2 | 0) + '余り' + (3 % 2)); // 余り
    
    // カッコ内が優先される 以下一行の右側(123 - 123)
    console.log(123 + (234 - 234));
}


// データ型
function dataType() {
    console.log('');
    console.log('<span>データ型</span>');

    // typeofで型をチェックする。
    console.log(typeof 42);         // expected output: 'number'
    console.log(typeof 'blubber');  // expected output: 'string'
    console.log(typeof true);       // expected output: 'boolean'
}


// 変数・定数
function variable() {
    console.log('');
    console.log('<span>変数・定数</span>');

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
    console.log('<span>条件分岐 if文 switch文</span>');

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
    console.log('<span>繰り返し while文 for文</span>')

    let i = 0;

    console.log('while文');
    while(i != 10) {
        i++;
        console.log(i);
    }

    i = 1;
    
    console.log('for文');
    for(i; i <= 10; i++) {
        console.log(i)
    }
}


// 配列
function arrangement() {
    console.log('');
    console.log('<span>配列</span>');

    const fuga = ['hoge', 'piyo'];

    console.log(fuga.length);           // 配列の長さ
    console.log(fuga[fuga.length - 1]); // 配列の最後

    const fugaga = [...fuga, 'hoge', 'piyo'];
    console.log(fugaga);
}


// 拡張for
function extensionFor() {
    console.log('');
    console.log('<span>拡張for</span>');

    const pref = ["北海道", "東京都", "神奈川県"];

    for (var i in pref) {
        console.log(i + ' : ' + pref[i]);
    }
}


// 多次元配列
function multidimensionalArray() {
    console.log('');
    console.log('<span>多次元配列</span>');

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
    console.log('<span>例外処理 try-catch</span>');

    try {
        const result = 100 * num;
        console.log(result);
    } catch(e) {
        // エラー内容で分岐もできる
        console.log(e.message);
    } finally {
        //必ず実行される処理
        console.log('必ず実行');
   }
}


// メソッド・引数
function methods() {
    console.log('');
    console.log('<span>メソッド・引数</span>');

    function hoge() {
        console.log('hogeだよ');
    }

    hoge();

    function fuga(args) {
        console.log('argsを表示してるよ。' + args);
    }

    fuga('我が名はargs');
}


// ソート(バブルソート)
function bubble() {
    console.log('');
    console.log('<span>ソート(バブルソート)</span>');

    //ソート前の配列データ
    var a = [1,3,10,2,8];

    //調べる範囲の開始位置を１つずつ後ろへ移動するfor文
    for(var i = 0; i < a.length; i++){
        //後ろから前に向かって小さい値を浮かび上がらせるfor文
        for(var j = a.length-1; j>i ; j-- ){
            //隣りあう２つの値を比べて、後ろが小さければ交換する
            if(a[j]<a[j-1]){
                var tmp = a[j];
                a[j] = a[j-1];
                a[j-1] =tmp;
            }
        }
    }
    //ソート後の配列の表示
    console.log(a);
}

// 以上学校のプログラミング基礎演でやったこと
