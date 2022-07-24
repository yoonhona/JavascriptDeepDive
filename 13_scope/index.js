(() => {
    function add(x, y) {
        console.log(x, y)
    }

    add(2, 5)
    try {

        console.log(x, y)
    } catch (e) {
        console.log(e)
    }
})();
console.log('-------------------------');
(() => {
    var var1 = 1;
    if (true) {
        var var2 = 2;
        if (true) {
            var v3 = 3;
        }
    }

    function foo() {
        var v4 = 4;

        function bar() {
            var v5 = 5;
        }
    }

    try {

        console.log(var1)
        console.log(var2)
        console.log(v3)
        console.log(v4)
        console.log(v5)
    } catch (e) {
        console.log(e)
    }
})();
console.log('-------------------------');
(() => {
    var x = 'global';

    function foo() {
        var x = 'local';
        console.log(x); // 1
    }

    foo();

    console.log(x) // 2
})();
console.log('-------------------------');

(() => {
    var x = 'g x';
    var y = 'g y';

    function outer() {
        var z = 'o l z';

        /**
         * g x
         * g y
         * o l z
         */
        console.log(x)
        console.log(y)
        console.log(z)

        function inner() {
            var x = 'i l x';

            /**
             * i l x
             * g y
             * o l z
             */
            console.log(x)
            console.log(y)
            console.log(z)
        }

        inner()
    }

    outer();

    try {
        /**
         * g x
         * ReferenceError: z is not defined
         */
        console.log(x)
        console.log(z)
    } catch (e) {
        console.log(e)
    }
})();
console.log('-------------------------');

(() => {
    function foo() {
        console.log('global')
    }

    function bar() {
        function foo() {
            console.log('local')
        }
        foo();
    }

    bar()
})();
console.log('-------------------------');


(() => {
    var x = 1;

    function foo() {
        var x = 10;
        bar();
    }

    function bar() {
        console.log(x)
    }

    foo();
    bar();
})();
