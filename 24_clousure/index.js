(() => {
    const increase = function () {
        let num = 0;
        return ++num;
    }

    console.log(increase())
    console.log(increase())
    console.log(increase())
})();

console.log('----------------------------');

(() => {
    const increase = (function () {
        let num = 0;
        return function () {
            return ++num;
        }

    })()

    console.log(increase())
    console.log(increase())
    console.log(increase())
})();

console.log('----------------------------');

(() => {
    const counter = (() => {
        let num = 0;

        return {
            increase() {
                return ++num;
            },
            decrease() {
                return num > 0 ? --num : 0;
            }
        }
    })();

    console.log(counter.increase())
    console.log(counter.increase())

    console.log(counter.decrease())
    console.log(counter.decrease())
})();

console.log('----------------------------');

(() => {
    const makeCounter = (predicate) => {
        let counter = 0;
        return function () {
            counter = predicate(counter);
            return counter
        }
    }

    function increase(n) {
        return ++n;
    }

    function decrease(n) {
        return --n;
    }

    const increaser = makeCounter(increase);
    const decreaser = makeCounter(decrease);

    console.log(increaser())
    console.log(increaser())

    console.log(decreaser()); // 새로운 렉시컬 환경이 생성되어 counter 공유되지 않는다.
    console.log(decreaser())
})();

console.log('----------------------------');

(() => {
    const counter = (() => {
        let counter = 0;
        return (predicate) => {
            counter = predicate(counter);
            return counter
        }
    })();


    function increase(n) {
        return ++n;
    }

    function decrease(n) {
        return --n;
    }

    console.log(counter(increase))
    console.log(counter(increase))

    console.log(counter(decrease))
    console.log(counter(decrease))
})()

console.log('---------------- # 24.5 ------------');

(() => {
    function Person(name, age) {
        this.name = name;
        let _age = age;

        this.sayHi = function () {
            console.log(this.name + ', ' + _age)
        }
    }

    const me = new Person('lee', 20);
    me.sayHi();


    const you = new Person('kim', 30);
    you.sayHi()
})()

console.log('----------------------------');

(() => {
    const Person = (() => {

        let _age = 0;

        function Person(name, age) {
            this.name = name;
            _age = age
        }

        Person.prototype.sayHi = function () {
            console.log(this.name, _age)
        }

        return Person
    })()



    const me = new Person('lee', 20);
    me.sayHi();


    const you = new Person('kim', 30);
    you.sayHi()
    me.sayHi()
})()

console.log('---------------- # 24.6 ------------');
(() => {
    var funcs = [];

    for (var i = 0; i < 3; i++) {
        funcs[i] = function () {
            return i;
        }
    }

    for (var j = 0; j < funcs.length; j++) {
        console.log(funcs[j]())
    }
})();

console.log('----------------------------');

(() => {
    var funcs = [];

    for (var i = 0; i < 3; i++) {
        funcs[i] = ((id) => {
            return function () {
                return id;
            }
        })(i)
    }

    for (var j = 0; j < funcs.length; j++) {
        console.log(funcs[j]())
    }
})()
