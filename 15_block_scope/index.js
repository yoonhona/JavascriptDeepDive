(() => {
    var x = 1;
    var y = 1;

    /**
     * 같은 스코프 내에서 중복 선언 허용
     * 초기화문이 있는 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작
     */
    var x = 100;

    // 초기화문이 없는 변순 선언문의 무시
    var y;

    console.log(x); // 100
    console.log(y); // 1
})();
console.log('-------------------------');

(() => {
    var x = 1;
    if (true) {
        var x = 10;
    }

    console.log(x) // 10
})();

console.log('-------------------------');
(() => {
    console.log(foo);

    foo = 123;

    console.log(foo);

    var foo;
})();
console.log('-------------------------');

(() => {
    var x = 1;
    if (true) {
        var x = 10;
    }

    console.log(x);


    var i = 10;
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }

    console.log(i)
})();
console.log('-------------------------');


(() => {
    let foo = 1;
    {
        let foo = 2;
        let bar = 1;
    }

    console.log(foo);
    try {
        console.log(bar);
    } catch (e) {
        console.log(e)
    }
})();

(() => {
    try {
        console.log(foo);
    } catch (e) {
        console.log(e)
    }

    let foo;
    console.log(foo);

    foo = 1;
    console.log(foo)
})();

slkdfjskldjfa
