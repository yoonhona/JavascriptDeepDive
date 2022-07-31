# 24장 closure

## 클로저는 자바스크랩트 스팩이 아님

- 클로저는 실행 컨택스트에 대한 사전 지식 필요
- 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어(하스켈, 리스프, 얼랭, 스칼라 등)에서 사용하는 중요한 특성
- ECMAScript 스팩에 없음
- 클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합 - [MDN 클로저 정의](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

## 렉시컬 스코프

- 23장에서 살펴 봤듯이 스코프의 실체는 실행 컨택스트의 렉시컬 환경
- 외부 렉시컬 환경에 대한 참조를 통해 상위 렉시컬 환경과 연결, 이것이 스코프 체인

## 함수 객체의 내부 슬롯

- 외부 렉시컬 환경을 기억해야 하는데 그 부분은 함수 객체의 [[Evviroment]] 슬롯에 저장
- 자신이 실행되는 한 상위 스코프롤 기억

## 클로저와 렉시컬 환경

- 이미 생명주기가 종료한 외부 함수의 변수를 참조하는 함수를 클로저(closure)라 부름
- 함수가 종료되면 콜 스택(실행 컨택스트 스택)에서 제거 되지만 렉시컬 환경이 소멸되지 않음
    - 해당 환경을 참조하고 있는 렉시컬 환경
    - 즉 외부 렉시컬 환경에 자신참조하고 있는 클로저 함수가 실행되고 있는 한 소멸되지 않고 자바스크립트 엔진 가비지 컬렉터에서 해제하지 않음
- 중첩 함수는 전부 클로저일까?
    - 중첩 함수 이기에 상위 스코프를 기억하지만 상위 스코프 변수를 참조하지 않는다면 클로저로 동작하지 않는다.
    - 자바스크립트 엔진에서 최적화를 통해 상위 스코프롤 참조하지 않는다
- 성능 관련
    - 상위 스코프를 참조하고 가비지 컬렉터에서 해제되지 않기 때문에 메모리가 낭비될 것 이라고 생각할 수 있지만 자바스크립트 엔진에서 상위 스코프에서 참조하는 변수만 남기는 형태로 최적화를 함
- 자유 변수
    - 클로저 함수가 참조하는 상위 스코프의 변수를 자유 변수
    - 이 변수를 접근 & 제어가 가능
    - 자유 변수에 묶여있는 함수를 클로저라 함

## 클로저의 활용

- 상태를 안전하게 은닉

```jsx
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

console.log(counter.increase()) // 1
console.log(counter.increase()) // 2

console.log(counter.decrease()) // 1
console.log(counter.decrease()) // 0

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
```

## 캡슐화와 정보 은닉

```jsx
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
    you.sayHi(); // 30
    me.sayHi(); // 30, 클로저에 의해 _age가 변경
```

## 자주 발생하는 실수

```jsx
(() => {
    var funcs = [];

    for (var i = 0; i < 3; i++) { // var를 let으로 교체하여 렉시컬 환경을 만들어주면 해결
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
```
