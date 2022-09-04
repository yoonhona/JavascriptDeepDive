# 스프레드 문법

- ES6에서 도입된 스프레드 문법 ...은 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서 개별적인 값들의 목록으로 만들어 준다
- 대상은 Array, String, Map, Set, DOM 컬렉션(NodeList, HTMLCollection), arguments 같이 for ... of 문으로 순회 가능한 이터러블로 한정
- 스프레드 문법의 결과는 값이 아님, 피연산자를 연산하여 값을 생성하는 연산자가 아님을 의미
- 스프레드 문법의 결과를 변수에 할당 할 수 없음
- 값의 목룍을 사용하는 문맥에서만 사용 가능
  - 함수 호출문의 인수 목록
  - 배열 리터럴 요소 목록
  - 객체 리터럴 프로퍼티 목록

## 함수 호출문의 인수 목록

- Math.max는 여러개의 숫자를 인수로 전달받으 가장 큰 값을 반환
- 배열을 인수로 전달하면 NaN을 반환
  - 이전에는 Function.prototype.apply를 사용
  - `Math.max.apply(null, arr); // 3`
  - 스레드 문법을 사용하면 간결하여 가독성이 좋음
  - `Math.max(...arr)`
- Rest 파라미터와 혼동하지 않도록 주의
  - Rest는 함수에 전달된 목록을 `배열로` 전달받기 위함
  - 스프레드는 여러 개의 값이 하나로 뭉쳐있는 이터러블을 `개별적인` 값들의 목록을 만듬
  - 서로 반대 개념


## 배열 리터럴 내부에서 사용

## concat
- 배열 결합

```
// es5
var arr = [1,2].concat([3, 4]);
console.log(arr);

// es6
const arr = [...[1,2], ...[3,4]);
console.log(arr);

```

## splice
- 배열 중간에 요소 추가 및 제거
```javascript
// es5
var arr = [1, 4];
var arr2 = [2, 3];
Array.prototype.splice.apply(arr, [1, 0].concat(arr2)); // [1, 2, 3,4]

// es6
arr.splice(1, 0, ...arr2);

```

## 배열 복사
- 배열의 요소는 얕은 복사(shallow copy)된다.
```javascript
// es5
var origin = [1, 2];
var copy = origin.slice();

// es6
const origin = [1, 2];
const copy = [...origin];
```

## 이터러블을 배열로 변환
```javascript
// es5
function sum() {
  // 유사 배열로
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(previousValue, currentValue) { 
    return previousValue + currentValue;
  }, 0)
}

// 이터러블이 아닌 객체를 유사 배열 객체로
const arrayLike = {
  0: 1, 1: 2, 2: 3,
  length: 3
}
const arr = Array.prototype.slice.call(arrayLike);
console.log(Array.isArray(arr)) // true

// es6
function sum() {
  return [...arguments].reduce((pre, curr) => pre + curr, 0);
}
const arrayLike = {
  0: 1, 1: 2, 2: 3,
  length: 3
}
// 유사 배열 객체는 스프레드 문법이 불가능
const arr = [...arrayLike]; // TypeError....
Array.from(arrayLike); // [1,2,3];

```

## 객체 리터럴 내부에서 사용
```javascript
// 객체 복사
const obj = {x: 1, y: 2};
const copy = {...obj};

// 객체 병합
const merged = {x: 1, y: 2, ...{a:1}};


```
