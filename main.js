main();

function main() {
    logDisplay();   // コンソールの表示をHTMLに入れる
    test();
}


// コンソールをhtmlのdivへ
function logDisplay() {
    console.log = function (log) {
        document.getElementById('main').innerHTML += log + "<br>";
    }
}

function test() {
    console.log('');
    console.log('Mainです。');
}